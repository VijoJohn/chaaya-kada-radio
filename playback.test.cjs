// Run with node --test malayalam-radio/playback.test.cjs. No network or packages.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

function fixture() {
  class Element {
    constructor() {
      this.dataset = {}; this.attrs = {}; this.listeners = {};
      this.paused = true; this.currentTime = 0; this.duration = 250;
      this.plays = 0; this.loads = 0;
    }
    addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); }
    emit(name) { for (const fn of this.listeners[name] || []) fn({}); }
    setAttribute(name, value) { this.attrs[name] = value; }
    removeAttribute(name) { delete this[name]; }
    querySelector() { return this; }
    replaceChildren() {}
    append() {}
    animate() { return { play() {}, pause() {} }; }
    load() { this.loads++; this.paused = true; this.error = null; this.emit('emptied'); }
    play() {
      this.plays++;
      if (this.playError) return Promise.reject(this.playError);
      this.paused = false; this.emit('play'); this.emit('playing');
      return Promise.resolve();
    }
    pause() { this.paused = true; this.emit('pause'); }
  }
  const elements = new Map();
  const get = id => {
    if (!elements.has(id)) elements.set(id, new Element());
    return elements.get(id);
  };
  const timers = new Map(); let timerId = 0;
  const context = vm.createContext({
    document: { getElementById: get, querySelector: get, querySelectorAll: () => [], createElement: () => new Element() },
    navigator: {}, sessionStorage: { getItem: () => 'test-session' },
    window: { setTimeout(fn) { timers.set(++timerId, fn); return timerId; }, clearTimeout(id) { timers.delete(id); }, setInterval() {}, addEventListener() {} },
    clearInterval() {}, AbortController, DOMException, Intl, console
  });
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  // Avoid boot-time fetching; exercise the actual application functions below.
  vm.runInContext(script.replace('    loadProgram(activeEra);', ''), context);
  const run = code => vm.runInContext(code, context);
  run(`fetchProgram = async era => [{id:era, title:era, duration:250, releaseYear:1991, source:'Test', artist:'Artist', streamUrl:'https://audio.example/test.mp3'}]`);
  return { run, get, timers };
}

test('decade switches preserve playback and pause stays paused', async () => {
  const f = fixture();
  await f.run('loadProgram("80s")');
  assert.equal(f.get('audioPlayer').plays, 0);
  f.run('togglePlayback()');
  await f.run('loadProgram("90s")');
  await f.run('loadProgram("2000s")');
  assert.equal(f.get('audioPlayer').plays, 3);
  assert.equal(f.get('playBtn').attrs['aria-label'], 'Pause the station');
  f.run('togglePlayback()');
  await f.run('loadProgram("90s")');
  assert.equal(f.get('audioPlayer').plays, 3);
  assert.equal(f.get('playBtn').attrs['aria-label'], 'Play the station');
});

test('rapid switches discard late results without losing play intent', async () => {
  const f = fixture();
  await f.run('loadProgram("80s")'); f.run('togglePlayback()');
  f.run('var pending = {}; fetchProgram = era => new Promise(resolve => pending[era] = resolve)');
  const first = f.run('loadProgram("90s")');
  const second = f.run('loadProgram("2000s")');
  f.run('pending["2000s"]([{id:"new",title:"New",duration:250,streamUrl:"https://audio.example/new"}])');
  await second;
  f.run('pending["90s"]([{id:"stale",duration:250}])'); await first;
  assert.equal(f.run('currentTrack().id'), 'new');
  assert.equal(f.run('playbackWanted'), true);
});

test('stream errors retry once using the official endpoint then stop', async () => {
  const f = fixture(); await f.run('loadProgram("90s")'); f.run('togglePlayback()');
  const audio = f.get('audioPlayer'); audio.emit('loadedmetadata'); audio.currentTime = 42;
  audio.error = { code: 2 }; audio.emit('error');
  assert.match(audio.src, /^https:\/\/api\.audius\.co\/v1\/tracks\/90s\/stream\?/);
  assert.equal(f.run('stationOffset'), 42);
  audio.error = { code: 2 }; audio.emit('error');
  assert.equal(f.run('playbackWanted'), false);
  assert.equal(f.get('deck').dataset.state, 'error');
  assert.equal(f.timers.size, 0);
  assert.equal(f.get('playBtn').attrs['aria-label'], 'Play the station');
});

test('stalled playback has bounded recovery and pause cancels it', async () => {
  const f = fixture(); await f.run('loadProgram("90s")'); f.run('togglePlayback()');
  f.get('audioPlayer').emit('waiting');
  const staleTimeout = [...f.timers.values()][0];
  await f.run('loadProgram("2000s")');
  const loads = f.get('audioPlayer').loads;
  staleTimeout();
  assert.equal(f.get('audioPlayer').loads, loads);
  f.get('audioPlayer').emit('waiting');
  [...f.timers.values()][0]();
  assert.match(f.get('audioPlayer').src, /\/stream\?/);
  f.get('audioPlayer').emit('waiting'); f.run('pausePlayback()');
  assert.equal(f.timers.size, 0);
});

test('autoplay denial offers a manual play action without retrying', async () => {
  const f = fixture(); await f.run('loadProgram("90s")');
  f.get('audioPlayer').playError = { name:'NotAllowedError' };
  f.run('togglePlayback()'); await Promise.resolve();
  assert.equal(f.run('playbackWanted'), false);
  assert.equal(f.run('streamRetried'), false);
  assert.match(f.get('playerNotice').textContent, /tap on Play/);
  assert.equal(f.timers.size, 0);
});
