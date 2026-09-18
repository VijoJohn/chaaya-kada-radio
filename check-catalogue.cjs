// Online audit: metadata/filter compatibility and a small stream response only.
// Does not save audio or signed stream URLs.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new Function(script);
const context = vm.createContext({});
vm.runInContext(script.slice(0, script.indexOf('    const dom =')) +
  script.slice(script.indexOf('    function ruleForTrack'), script.indexOf('    async function fetchJson')) +
  '\nthis.rules = CURATED_TRACKS; this.accept = t => usableTrack(t) && isMalayalamTrack(t);', context);

async function probe(url) {
  const response = await fetch(url, { headers: { Range: 'bytes=0-1023' }, signal: AbortSignal.timeout(15000) });
  const type = response.headers.get('content-type') || '';
  const reader = response.body?.getReader();
  try {
    if (!response.ok) throw Error(`HTTP ${response.status}`);
    const chunk = reader ? (await reader.read()).value : null;
    const mp3 = chunk && ((chunk[0] === 73 && chunk[1] === 68 && chunk[2] === 51) || (chunk[0] === 255 && (chunk[1] & 224) === 224));
    if (!chunk?.length || (!type.startsWith('audio/') && !mp3)) throw Error(`Not an audio response: ${type}`);
    return { status: response.status, type };
  } finally { await reader?.cancel(); }
}

(async () => {
  if (new Set(context.rules.map(r => r.id)).size !== context.rules.length) throw Error('Duplicate track IDs');
  const counts = { '80s': 0, '90s': 0, '2000s': 0 };
  let failures = 0;
  for (let i = 0; i < context.rules.length; i += 4) {
    await Promise.all(context.rules.slice(i, i + 4).map(async rule => {
      try {
        const response = await fetch(`https://api.audius.co/v1/tracks/${rule.id}?app_name=Chaaya_Kada_Radio`, { signal: AbortSignal.timeout(15000) });
        if (!response.ok) throw Error(`Metadata HTTP ${response.status}`);
        const payload = await response.json();
        const track = Array.isArray(payload.data) ? payload.data[0] : payload.data;
        if (!context.accept(track)) throw Error('Rejected by the actual player filters');
        let audio, recovered = false;
        try { audio = await probe(track.stream.url); }
        catch { audio = await probe(`https://api.audius.co/v1/tracks/${rule.id}/stream?app_name=Chaaya_Kada_Radio`); recovered = true; }
        counts[rule.year < 1990 ? '80s' : rule.year < 2000 ? '90s' : '2000s']++;
        console.log(JSON.stringify({ title: rule.title, year: rule.year, ...audio, recovered }));
      } catch (error) { failures++; console.log(JSON.stringify({ title: rule.title, error: error.message })); }
    }));
  }
  console.log(JSON.stringify({ configured: context.rules.length, playable: counts, failures }));
  process.exitCode = failures ? 1 : 0;
})();
