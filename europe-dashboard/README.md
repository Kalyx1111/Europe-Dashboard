# Europe Dashboard - v1

Covers **Europe**: from the Atlantic coasts of Portugal, Spain, France, Ireland and Britain to the
western edge of European Russia (lon 41.5 E), and from the Mediterranean's northern shores,
including Crete, Cyprus and Malta, to the Norwegian and Russian Arctic coasts. A local production
server (waitress) with auto-restart, real open-data map layers, and 15 headings fed from clear-web
news, Telegram, Instagram (official route) and dark-web sources. Built on the same architecture as
the China Dashboard v6 and the other regional builds.

## Start (Windows)

Double-click `start.bat`. It creates the virtual environment, installs the packages, runs a
self-check, starts the server under `supervisor.py` (restarts it after a crash), and opens
http://127.0.0.1:8787/. The page opens at once and fills in as sources answer. The first pass
takes a minute or two, because GDELT asks clients to pace their requests.

## The map: Europe, and little around it

The map is cropped to Europe. It does not show North Africa or the Middle East. It does not
show Iceland, which lies outside the western edge of the frame, or Svalbard, which lies to the
north. The Atlantic and Arctic margins are narrow by design.

**Map basis.** The boundaries follow **Natural Earth's default country data**, not India's
survey depiction used in the South Asia dashboards, because no South Asia dispute applies here.

Disputed territory, and what the map does and does not show:
- **Crimea and Sevastopol** (dashed amber outline). In Natural Earth's default data they lie inside
  Russia. Ukraine and most UN member states regard them as Ukrainian. Russia has administered them
  since 2014.
- **Kosovo** is shown as a separate state. It has declared independence, and Serbia and several
  other states do not recognise it.
- **Transnistria** is shown as part of Moldova, but Moldova does not control it.
- **Abkhazia and South Ossetia** are shown within Georgia, which does not control them.
- **Cyprus** is shown as one state. Its north has been divided since 1974 and is recognised only by Turkey.
- **Gibraltar** is shown as UK territory. Spain claims it.

The map does not settle any of these. Each is labelled in the tooltips for the relevant sites.

Limits of the drawing: labels overlap in the Baltic (Helsinki and Tallinn, Kaliningrad and the
Suwałki Gap) and at the edges of the frame. Hover over each marker for its own tooltip.

## The 15 headings

Geopolitical & Diplomatic - Military Operations & Force Posture - Strategic Arms & Nuclear Program
- Naval & Maritime Security - **Baltic, Black Sea & Strait Chokepoints** - Air Force & Aviation -
Space Tech & Aerospace - Critical Tech & AI Governance - Cyber Espionage & APTs - Darkweb & Threat
Intel - Economic & Trade - Internal Security & Intelligence Operations - Social Pulse & Public
Sentiment - Happiness & Wellbeing Indices - Natural Hazards & Environmental Risks.

Headline routing is in `app/classify.py`, as ordered keyword rules that are readable and editable.
Military action words (troops, strikes, front line) are recognised before sea and border words, so
a strike near a port is filed as military. Short keywords are whole-word matches, so "eu" does not
match "neutral", "euro" does not match "Europe", and "EU" on its own is political, not economic.

## The running news feed

It shows the last 72 hours only, always. The All Time switch does not widen it. Undated background
items never count as "latest". The feed shows only news not pinned to a map location.

## Where news comes from, and what each source needs

| Source | Needs | Notes |
|---|---|---|
| GDELT | nothing | 20 English-language queries on Europe, the EU, NATO, the war in Ukraine, the Baltic, Poland and Belarus, Finland, Kaliningrad, the Balkans, Kosovo, Bosnia, Cyprus and Turkey, the Black Sea, Moldova, UK defence, cyberattacks, sanctions, sabotage and Nord Stream. Paced 6 seconds apart; on HTTP 429 it waits 20 seconds and retries once. |
| RSS | nothing | See the feed list below. Each feed reports its own status. |
| Telegram public channels | nothing (no account) | Read through t.me/s/<name>. The list is in `data/telegram_channels.json`. |
| Instagram (official Business Discovery) | a Meta developer app, an Instagram Business or Creator account you own, and a token | Only Business and Creator accounts can be read. Personal accounts cannot. |
| Dark web via Tor | Tor on this PC | Only onion sources you verify yourself, in `data/onion_sources.json`. |
| Ransomware.live (leak-site claims) | nothing | Group claims, not verified facts. The filter shows victims in European countries. |
| USGS earthquakes | nothing | Map dots when USGS reports events in the box (34.8 to 71.5 N, 11.5 W to 41.5 E). |

### RSS feeds in this build

Each address is confirmed from a publisher's own list, a curated list, or a directory that prints it.

- **Public broadcasters and general news:** Deutsche Welle (English), France 24 (English), Euronews, BBC News (home, UK and world), The Guardian (world).
- **Western Balkans:** Balkan Insight (`balkaninsight.com/feed/`).
- **Defence, naval and space** (filtered to European headlines): Naval News, Shephard Media, Defense News (space category), Breaking Defense, SpaceNews, Space.com, The Record.

**Not confirmed in this build, and so not included:**
- **Ukraine:** The Kyiv Independent's directory listing cuts off its feed address, so I did not use it.
  Euromaidan Press and UNIAN are named without feed addresses.
- **Poland:** Notes from Poland is named without an address.
- **EU policy:** Politico Europe, Euractiv and EUobserver are named without addresses.
- **Russia (independent):** The Moscow Times and Meduza are named without addresses.
- **Space agency:** ESA publishes feeds per member state and programme, but I did not confirm a
  global news feed.

**This is the main gap.** Ukraine and Russia coverage in English relies on GDELT and the Telegram
channels until feeds are added. If you send me the feed addresses, I will add and check them.

## Telegram channels

The list is the same as in the other builds. It is not tuned to Europe. Add channels for the
languages you need (Ukrainian, Russian, Polish, German, French) in `data/telegram_channels.json`.

Excluded on purpose:
- **OffensiveTwitter** (offensive-security and exploit content).
- **HaveIBeenPwnedBreaches** (channels of this type can carry raw breach records; use the official haveibeenpwned.com service instead).

Channels marked `verified: false` have not been confirmed live. Their status line shows whether they answer.

## Layers: only what has data

The layer toggles are generated only for categories this region has data for. A test
(`tests/test_layers_have_data.py`) fails the build if any toggle is empty. The earthquake toggle
is the one live-only exception.

- **Civil airports:** 829 large and medium airports (OurAirports, CC0).
- **Air bases:** 312 bases whose names say "air base", "air force", "air station" or "AFB"
  (OurAirports). These are reference points, not base perimeters, and their status is unknown.
- **Seaports:** 356 port points (Natural Earth).
- **Nuclear plants:** 70 operating commercial plants (WRI Global Power Plant Database, CC-BY 4.0).
- **Sites:** 82 sourced sites, including 43 capitals and institutions, navies and submarine bases,
  NATO and US air bases, nuclear sites, space sites, chokepoints, pipelines and flashpoints.

## Reference items, and what each one rests on

- **Finland joined NATO on 4 April 2023**, and **Sweden on 7 March 2024**. UK House of Commons
  Library and US Congressional Research Service.
- **The Nord Stream sabotage of 26 September 2022.** Four explosions hit Nord Stream 1 and 2.
  Reporting in 2023 linked the sabotage to a possible Ukrainian operation. Official attribution is
  not settled. ACLED and the Swedish and Danish investigations.
- **Suspicious activity concentrated in the Baltic Sea.** ACLED links it to the accession of
  Finland and Sweden and to rising tension.
- **Russia's full-scale invasion of Ukraine in February 2022**, as reported by the US Congressional
  Research Service and the UK House of Commons Library.
- **Zaporizhzhia nuclear plant under Russian control since March 2022**, according to IAEA reporting.
  **Not re-verified in this build**: check the latest IAEA update before you rely on it.
- **The World Happiness Report 2026** ranks for Europe's countries were not verified in this build.

## Dark web: reading onion sources

1. Install **Tor Browser** and open it (SOCKS port **9150**), or install the **Tor service** and start it (port **9050**).
2. Keep it running. The dashboard checks both ports.
3. Add onion RSS sources that you verified on the outlet's **own official website** to `data/onion_sources.json`. Fake onion lookalikes are common. The dashboard rejects any address that is not a well-formed v3 onion (56 characters, a-z and 2-7, then .onion).
4. Press Refresh.

No account is needed for onion RSS sources. The dashboard does not crawl or search the dark web,
does not scrape forums or marketplaces, does not open .onion pages in a browser, and does not read
stealer-log or carding markets.

## Instagram (Meta Business Discovery)

1. Make an Instagram **Business or Creator** account that you own, and link it to a Facebook Page.
2. Create a Meta developer app and add the Instagram/Facebook Login product.
3. Generate a Facebook user access token with `instagram_basic` and `pages_read_engagement` (and `instagram_manage_insights` if Meta requires it). Use a long-lived token.
4. Enter the numeric ID of your account and the token in the gear icon. They are stored encrypted with AES-256.
5. List target usernames in `data/instagram_accounts.json`.

Check Meta's current requirements before you rely on this route, because they can change.

## Security

- Keys and tokens are encrypted with AES-256-GCM. The token is removed from every error message before it is displayed.
- The server listens on 127.0.0.1 only.
- Strict Content-Security-Policy. No third-party scripts, fonts or trackers.
- Hostile text (headlines, channel posts, marker labels) is escaped before display. Only http and https links become clickable.
- Telegram handles and Instagram usernames are validated before any URL is built.
- Clear-web requests can go through a proxy you choose (`PROXY_URL`, e.g. a VPN's local proxy). Dark-web requests go through Tor only, never direct.

A dashboard **cannot** secure your whole PC or phone from attack. That takes current OS updates, a
firewall, endpoint protection and sensible accounts. It also cannot hide your IP address or
location from the sites it fetches from, unless you route traffic through a VPN or Tor. Even then,
the VPN or Tor provider can see your traffic.

## Tests

`pip install -r requirements.txt pytest`, then `python -m pytest tests/` (36 tests).
Browser-side tests: `npm install` and `npm test`. They load the shipped `dashboard.js` into a real DOM.

## Honest limitations

- **Live sources were not reachable from the build sandbox.** Every external connector reported a connection error there, so no live news appears in this build. The status panel shows the real result on your machine. Check it on the first run.
- **Ukraine and Russia in English** rely on GDELT and Telegram until feeds are added (see above).
- **The map is Europe and nothing else.** Iceland, Svalbard, North Africa and the Middle East are outside the frame by design.
- **Disputed territory.** The map states each claim as its source reports it. It does not decide any of these disputes.
- **Approximate sites.** SHAPE, Île Longue, Andøya, ESA's Darmstadt centre, the Donetsk front line, the Nord Stream blast area, TurkStream's landfall and the Suwałki Gap mark places named in reporting, not surveyed positions.
- **Status changes.** The front line, the occupied nuclear plant, the sabotage investigations and the state of the Ukraine war change. Verify before you rely on any of them.
- **Air bases** are reference points from a civil airport dataset, not base perimeters. Operational status is unknown for most of them.
- **No garrison-level sites, ammunition depots, submarine positions or military positions.** No open dataset publishes them, and none were invented.
- **Single-user, local.** It runs on your machine while it is open.
