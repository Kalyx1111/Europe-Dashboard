# 🇪🇺 EUROPE DASHBOARD v1.0

***

#### 🌍 REGIONAL INTELLIGENCE & GEOSPATIAL MONITORING

**Europe Dashboard** is a locally hosted OSINT platform combining interactive mapping, regional news monitoring, geospatial data and multiple intelligence categories in one interface.

The map focuses on Europe, from the Atlantic coast to European Russia and from the Mediterranean to the Arctic coast. North Africa and the Middle East are excluded from the map view.

**Map Europe. Monitor regional developments. Track emerging threats.**

***

#### 🎯 CORE FEATURES

- Europe-focused interactive map
- Country boundaries and geographic reference points
- Civil airports and military air-base reference points
- Seaports and maritime chokepoints
- Nuclear power plants and strategic infrastructure
- Naval and submarine-base references
- Space facilities, pipelines and regional flashpoints
- Disputed-territory reference markings
- 15 configurable intelligence categories
- Regional news aggregation and headline classification
- Configurable map layers and source-status monitoring

***

#### 🗂️ INTELLIGENCE CATEGORIES

- Geopolitical & Diplomatic
- Military Operations & Force Posture
- Strategic Arms & Nuclear Program
- Naval & Maritime Security
- Baltic, Black Sea & Strait Chokepoints
- Air Force & Aviation
- Space Tech & Aerospace
- Critical Tech & AI Governance
- Cyber Espionage & APTs
- Darkweb & Threat Intel
- Economic & Trade
- Internal Security & Intelligence Operations
- Social Pulse & Public Sentiment
- Happiness & Wellbeing Indices
- Natural Hazards & Environmental Risks

***

#### 📰 DATA & INTELLIGENCE FEEDS

The dashboard supports multiple types of open-source and regional data:

- **GDELT:** European news and event reporting
- **RSS / Atom:** Public broadcasters, international news, Balkan news, defence, naval, cyber and space feeds
- **Public Telegram:** Channel previews and updates
- **Instagram:** Optional official Meta Business Discovery integration
- **Dark-web RSS:** Verified onion RSS sources accessed through Tor
- **Ransomware intelligence:** European leak-site claims from Ransomware.live
- **Earthquake data:** USGS earthquake information
- **Geospatial data:** Country boundaries and geographic reference points
- **Aviation data:** Civil airports and air-base reference points
- **Maritime data:** Seaports, naval references and strategic chokepoints
- **Nuclear data:** Operating commercial nuclear power plants
- **Security data:** Strategic sites, pipelines and reported flashpoints
- **Regional news:** European countries, the EU, NATO, Ukraine, Russia, the Balkans and surrounding maritime areas

Feed availability depends on network connectivity, source configuration and access requirements.

***

#### 🗺️ MAP DATA

The documented build includes:

- 42 countries within the map frame
- 829 civil airports
- 312 air-base reference points
- 356 seaport points
- 70 operating commercial nuclear plants
- 82 sourced sites, including 43 capitals and institutions
- 15 map-layer toggles
- Disputed-territory reference markings, including a dashed amber outline around Crimea

**Map scope:** Europe is shown in detail, with limited surrounding areas. North Africa, the Middle East, Iceland and Svalbard are outside the documented frame.

***

#### 🔐 SECURITY & PRIVACY

- Localhost web server
- AES-256-GCM encryption for stored API keys and tokens
- Content Security Policy
- No third-party scripts, fonts or trackers
- Validation and escaping of displayed content
- Optional proxy support for clear-web requests
- Tor-only routing for configured onion sources

***

#### ⚙️ INSTALLATION & LAUNCH

**Windows:** Double-click `start.bat`

**Local dashboard:**

`http://127.0.0.1:8787/`

The launcher is designed to prepare the Python environment, install dependencies, run self-checks and start the application with automatic restart support.

***

#### 🧪 TESTING

The supplied build notes report:

- 36 Python tests passed
- 3 browser test suites passed
- Production check passed
- 15 intelligence heading panels
- 15 map-layer toggles

These results verify the tested application build, not the live availability of external news services.

***

#### ⚠️ LIMITATIONS

- Live news retrieval was not verified in the build environment.
- English-language coverage of Ukraine and Russia has feed gaps.
- Some map markers are approximate reference locations.
- Air-base markers do not establish base perimeters or current operational readiness.
- Territorial disputes are represented for reference and are not resolved by the map.
- Conflict lines, nuclear-plant status and security developments can change.
- Dark-web RSS requires Tor and verified onion sources.
- The application is designed for local, single-user operation.

***

#### 🛡️ RESPONSIBLE USE

Europe Dashboard is intended for lawful OSINT research, regional news monitoring, geospatial analysis and situational awareness. Reported information may be incomplete, disputed or outdated. Verify important developments through reliable, current sources.

***
