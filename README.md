# Chaaya Kada - Radio

A compact Malayalam CD-radio inspired by Kerala chaaya-kada culture and the focused single-station composition of Deluxe Saloon. The title sits above the tea shop. The decade selector sits just above a small free-standing artwork disc and lean, box-free controls along the bottom, leaving the counter and seating visible. The centre button shows pause bars during playback and a play arrow when paused or stopped.

Playback uses Malayalam-tagged artist uploads returned by the official Audius API. The site contains no YouTube embed, scraping, downloading, stream extraction, proxy, or bundled music files.

## Listen

https://vijojohn.github.io/chaaya-kada-radio/

No installation, account, API key, or build step is required.

## Playback

Press Play once to begin. Changing decades while listening continues playback;
changing decades while paused keeps the player paused. A browser may still require
another tap on Play after a switch.

If an audio server fails or buffers for 15 seconds, the player retries the same
song once through the official Audius streaming endpoint. If that also fails,
it stops with a retry/next-song message instead of looping through the catalogue.
Availability depends on the external audio source.

Run the offline playback regression checks with `node --test playback.test.cjs`.
Run `node check-catalogue.cjs` for an online catalogue/filter and partial-audio-response check; it does not save music files.

## Catalogue notes

- The 80s, 90s, and 2000s switches use reviewed upload IDs and title checks, with original film/album years. Known covers and later renditions are labelled.
- The September 2026 expansion selects 8 songs per decade (24 total), favouring warm melodies, folk-coloured duets and reflective evening songs. See [catalogue audit and year sources](CATALOGUE-AUDIT.md); source availability can change.
- Unknown-year and post-2009 works are excluded; remix, podcast, and club-oriented results are filtered out.
- Every track links to its Audius artist page.
- The simulated listener number has been removed. A genuine count requires the optional real-time presence endpoint documented in the source project.
