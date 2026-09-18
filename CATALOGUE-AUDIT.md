# Catalogue audit — updated 18 September 2026

## Expansion — 18 September 2026

Added 13 works for a total of **24: eight 80s, eight 90s and eight 2000s**. The original audit below is retained as history. No UI, playback logic, provider or decade boundaries changed.

Selection favours warm melodic vocals, gentle/folk-coloured duets and reflective monsoon-evening songs. This is a curation judgment based on the identified works and upload metadata, not a claim that every upload has been listened to in full or authenticated as an original master. The existing uploader attribution is retained. Pavizham Pol is explicitly labelled as a cover.

| Added work | Film year used | Year/identity reference | Audius ID | Why it fits |
| --- | --- | --- | --- | --- |
| Pavizham Pol (cover) | Namukku Parkkan Munthirithoppukal, 1986 | [Soundtrack metadata](https://music.apple.com/us/song/1595230077) | 4g0qOa | Gentle Johnson melody; uploader explicitly says cover, not original movie recording. |
| Poomukha Vathilkkal | Rakkuyilin Ragasadassil, 1986 | [Film-song catalogue](https://www.malayalachalachithram.com/movie.php?i=1900&ln=en) | 9OXd0 | Familiar, unhurried domestic nostalgia. Upload names the film. |
| Ethra Pookkalamini | Rakkuyilin Ragasadassil, 1986 | [Film-song catalogue](https://www.malayalachalachithram.com/movie.php?i=1900&ln=en) | MYro6V | Soft, reflective melody. Upload names the film. |
| Pallitherundo | Mazhavilkavadi, 1989 | [Label's film/song credits](https://www.youtube.com/watch?v=_gzGDfC6RxA) | YKR77Zv | Playful folk-coloured nostalgia. Upload names the film. |
| Maaya Manjalil | Ottayal Pattalam, 1991 | [Soundtrack metadata](https://music.apple.com/us/song/1743409217) | OWJxqWz | Lilting, warm romantic melody. Some reissue listings say 1992; the original-film catalogue and cited soundtrack use 1991. |
| Raajahamsame | Chamayam, 1993 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=10328) | JEx7vr7 | Expressive Johnson melody for reflective listening. Upload names the film. |
| Oru Rathri Koodi | Summer in Bethlehem, 1998 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=12965) | w7wrl5 | Unhurried evening nostalgia. |
| Doore Oru Thaaram | Meenathil Thalikettu, 1998 | [Soundtrack metadata](https://music.apple.com/us/song/1728286929) | m6W4NKp | Gentle romantic melody. |
| Kaatte Nee Veesaruthippol | Kaattu Vannu Vilichappol, 2001 | [Soundtrack metadata](https://music.apple.com/us/song/1728455249) | pGMBB | Soft, breeze-like melody. Upload names the film and singer. |
| Nee Manimukilaadakal | Vellithira, 2003 | [Label's film/song credits](https://www.youtube.com/watch?v=uMk6Y1YLzVc) | 83G64qO | Long-form, flowing romantic melody. |
| Kallai Kadavathu | Perumazhakkalam, 2004 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=8525&ln=ml) | 4jYo8v9 | Folk-coloured duet with a Kerala riverside feel. |
| Junile Nilamazhayil | Nammal Thammil, 2009 | [Label-supplied soundtrack metadata](https://music.amazon.in/tracks/B0F8X8V4QY) | 4jy5zq9 | Monsoon romance; uses the film's 2009 release year, not its earlier production date. |
| Mazha Njanarinjirunnilla | Dr. Patient, 2009 | [Film-song catalogue](https://www.malayalachalachithram.com/song.php?i=16997) | oWMBa | Rainy-evening Hariharan melody. Upload names Dr. Patient; not the unrelated film Mazha. |

All 13 metadata records were streamable and non-gated. Small range requests were used to check audio responses without saving music. Three primary servers initially failed (Pallitherundo, Maaya Manjalil, Kallai Kadavathu); their official Audius `/tracks/{id}/stream` recovery requests returned HTTP 206 `audio/mpeg`. The existing player already retries via this endpoint. External availability can still change.

Final full-catalogue check: **24/24** records passed the actual player filters and returned HTTP 206 `audio/mpeg` responses, with eight accepted records in each decade and no failures. These are metadata and partial-response checks, not full-song listening tests. Re-run with `node check-catalogue.cjs` (network access required).

Ottathumbi was considered but excluded: the identifiable Shankar Mahadevan/KS Chithra song is from **Pullipulikalum Aattinkuttiyum (2013)**, outside this station's decades ([Sony Music credits](https://www.youtube.com/watch?v=k5yVJ2Sz8pY)). Thumbi Vaa, Unarumee, Thenum Vayambum and Mizhiyoram searches did not return suitable playable versions; no placeholders were added.

API availability is not proof of an uploader's rights. This expansion uses only the existing official API streaming mechanism; it neither downloads/bundles music nor represents these recordings as public-domain or open-licensed.

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
