# Catalogue audit — 15 September 2026

## Result

The 80s list had only one configured work. It now has four; the 90s has four and the 2000s has three. All 11 selected Audius track endpoints returned HTTP 200, a stream URL, a positive duration, and a streamable/non-gated status during this audit. This is a snapshot, not a guarantee of future playback availability.

This is a metadata and song-era audit, not a full listening review or authentication of original masters. Decades use original film/album years. Audius upload dates, covers, remasters and compilation dates must not be used as original song years. Known later renditions/covers are labelled in the player. Unlabelled uploads are not claimed to be original recordings.

## Selected works

| Song | Film / album year | Era reference | Audius ID | Curation judgment |
| --- | --- | --- | --- | --- |
| Aayiram Kannumayi | Nokkethadhoorathu Kannum Nattu, 1985 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=1436) | P5MGWl1 | Gentle nostalgia; 99-second later rendition, tagged Vineeth Sreenivasan. Not an original 80s master. |
| Onnam Ragam Paadi | Thoovanathumbikal, 1987 | [Music Zone credits](https://www.youtube.com/watch?v=pBbHUxjiKd8) | wk6bpZr | Familiar melodic classic; upload recording/version not authenticated. |
| Chandana Manivathil | Marikkunnilla Njan, 1988 | [1988 film-song catalogue](https://www.malayalachalachithram.com/listsongs.php?y=1988) | YR0PVzK | Soft, reflective melody; upload recording/version not authenticated. |
| Kanneer Poovinte | Kireedam, 1989 | [Song history](https://www.manoramaonline.com/music/features/2023/05/26/kanneer-poovinte-song-special-story.html) | No92ovQ | Melancholic Johnson classic; suits a reflective evening, less cheerful than the other selections. |
| Kilukil Pambaram | Kilukkam, 1991 | [Film-song catalogue](https://www.malayalachalachithram.com/listsongs.php?m=2477) | Ea9RdMo | Warm, familiar film melody. |
| Allimalar Kavil | Midhunam, 1993 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=10242&ln=ml) | AlmMpvR | Folk-coloured, nostalgic melody. |
| Pinneyum Pinneyum | Krishnagudiyil Oru Pranayakalathu, 1997 | [Soundtrack metadata](https://www.shazam.com/song/1873084773/pinneyum-pinneyum-male-version) | 6YXp3 | Gentle Vidyasagar melody. |
| Nila Paithale | Olympian Antony Adam, 1999 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=9283&ln=en) | Zrq2jaE | Soft lullaby-like song; selected upload explicitly identifies itself as a cover. |
| Marannittumenthino | Randam Bhavam, 2001 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=9076) | 3R3wBpV | Restrained romantic melody. |
| Oru Chembaneer | Sthithi, 2003 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=8726&ln=ml) | XBqrv47 | Intimate, unhurried melody. |
| Sundariye Vaa | Chembakame, 2006 | [Album metadata](https://music.amazon.co.uk/tracks/B0D7PZJH8V) | 5KoxN7J | Familiar 2000s album nostalgia. Audius incorrectly or ambiguously categorises this upload as Audiobooks; retained by specific song identity, not by that genre label. |

The earlier Aayiram entry said 1984. This audit consistently uses the film catalogue's 1985 date. Some sources differ on 1984/1985; both are the 80s, and neither establishes the selected upload's recording year.

## Removed or withheld

- Ettam Pattu (`K710xZo`): the available upload is tagged Lofi/Reel/Trending and categorised Hip-Hop/Rap. Removed from this traditional melody selection; this is a curation judgment, not a claim that Avial is non-Malayalam.
- Ariyathe Ariyathe (`wG2ywEp`): generic title, no film identification, and several different songs share the name. Withheld rather than assigning Ravanaprabhu's 2001 year with unwarranted certainty.
- Etho Nidrathan: API says not streamable and supplies no stream URL.
- Mizhiyariyaathe: returned duration is zero; cannot schedule reliably.
- Karimizhi Kuruvi / Vasantharavin: previously found altered/bass-boosted uploads are not included.
- PonVeene-Lofi: altered version, excluded.
- Other 80s candidates including Thumbi Vaa, Unarumee Gaanam, Thenum Vayambum, Mizhiyoram and Manjal Prasadavum had no suitable result in the queries checked. This does not establish that no version exists anywhere on Audius.

## Guardrails

Each accepted entry must match both a reviewed Audius ID and its expected title pattern. New search hits cannot silently inherit a song's year. Unknown IDs, obvious other-language tags, rap/club genres, remixes, lo-fi, speed changes, unusable durations and gated/unstreamable items are rejected. One failed API request no longer removes all the other songs in a decade.

For a substantially larger catalogue of original film recordings, a catalogue source with the appropriate recordings and streaming permissions is still needed. API availability alone is not proof of an uploader's rights. Do not substitute unofficial stream extraction.
