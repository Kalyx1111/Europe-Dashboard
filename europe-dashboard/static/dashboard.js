
(function(){
  "use strict";

  const PROJ = {"scale": 644.7841440756797, "translate": [481.1959058183885, 1174.1943987866025], "width": 1300, "height": 760};
  const HEADING_KEYS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "econ", "mss", "social", "wellbeing", "hazard"];
  const SEED_DATA = {"updated_at": "offline-snapshot", "items_by_category": {"geo": [{"category": "geo", "label": "Finland joins NATO (4 April 2023)", "text": "Finland became NATO's 31st member on 4 April 2023. It applied in May 2022, after Russia's full-scale invasion of Ukraine.", "source": "UK House of Commons Library; US Congressional Research Service", "date": "Apr 2023", "url": null, "connector": "reference"}, {"category": "geo", "label": "Sweden joins NATO (7 March 2024)", "text": "Sweden became NATO's 32nd member on 7 March 2024. Its accession was delayed by ratification in Turkey and Hungary, which both approved it in early 2024.", "source": "UK House of Commons Library; US Congressional Research Service", "date": "Mar 2024", "url": null, "connector": "reference"}], "scs": [{"category": "scs", "label": "Nord Stream pipeline sabotage (26 September 2022)", "text": "Four explosions hit the Nord Stream 1 and 2 pipelines in the Baltic Sea on 26 September 2022, leaving only one of the four pipes intact. Reporting in 2023 linked the sabotage to a possible Ukrainian operation; official attribution is not settled.", "source": "ACLED; Swedish and Danish investigations (as reported)", "date": "Sep 2022", "url": null, "connector": "reference"}, {"category": "scs", "label": "Suspicious activity concentrated in the Baltic Sea (ACLED)", "text": "ACLED reports a concentration of suspicious events around undersea infrastructure in the Baltic Sea, which it links to the accession of Finland and Sweden to NATO and to rising tension. Attribution in individual cases is difficult.", "source": "ACLED analysis", "date": "ongoing (ACLED analysis)", "url": null, "connector": "reference"}], "milops": [{"category": "milops", "label": "Russia's full-scale invasion of Ukraine (February 2022)", "text": "Russia launched its full-scale invasion of Ukraine in February 2022. The invasion is the basis for Finland's and Sweden's applications to NATO and for the wider European security debate.", "source": "US Congressional Research Service; UK House of Commons Library (as reported)", "date": "Feb 2022", "url": null, "connector": "reference"}], "arms": [{"category": "arms", "label": "Zaporizhzhia nuclear plant under Russian control (since March 2022)", "text": "IAEA reporting says the Zaporizhzhia plant, Europe's largest nuclear station, has been under Russian control since March 2022. The IAEA has repeatedly warned about its safety.", "source": "IAEA reporting (not re-verified in this build)", "date": "Mar 2022", "url": null, "connector": "reference"}], "wellbeing": [{"category": "wellbeing", "label": "World Happiness Report 2026: European ranks not verified", "text": "The 2026 World Happiness Report ranks for Europe's countries were not verified in this build. Check the report directly.", "source": "World Happiness Report 2026 (not verified in this build)", "date": "Mar 2026", "url": null, "connector": "reference"}]}, "markers": [{"id": "brussels", "name": "Brussels (EU and NATO seat)", "lat": 50.8503, "lon": 4.3517, "cat": "capital", "note": "Seat of the European Union's executive and of NATO's headquarters (Brussels-Evere).", "source": "public information", "date": "", "linked_items": []}, {"id": "strasbourg", "name": "Strasbourg (European Parliament seat)", "lat": 48.5836, "lon": 7.7503, "cat": "capital", "note": "Official seat of the European Parliament.", "source": "public information", "date": "", "linked_items": []}, {"id": "frankfurt_ecb", "name": "Frankfurt (European Central Bank)", "lat": 50.1109, "lon": 8.6821, "cat": "capital", "note": "Seat of the European Central Bank.", "source": "public information", "date": "", "linked_items": []}, {"id": "paris", "name": "Paris", "lat": 48.8566, "lon": 2.3522, "cat": "capital", "note": "Capital of France.", "source": "-", "date": "", "linked_items": []}, {"id": "berlin", "name": "Berlin", "lat": 52.52, "lon": 13.405, "cat": "capital", "note": "Capital of Germany.", "source": "-", "date": "", "linked_items": []}, {"id": "london", "name": "London", "lat": 51.5074, "lon": -0.1278, "cat": "capital", "note": "Capital of the United Kingdom.", "source": "-", "date": "", "linked_items": []}, {"id": "dublin", "name": "Dublin", "lat": 53.3498, "lon": -6.2603, "cat": "capital", "note": "Capital of Ireland.", "source": "-", "date": "", "linked_items": []}, {"id": "amsterdam", "name": "Amsterdam", "lat": 52.3676, "lon": 4.9041, "cat": "capital", "note": "Capital of the Netherlands.", "source": "-", "date": "", "linked_items": []}, {"id": "luxembourg", "name": "Luxembourg City", "lat": 49.6116, "lon": 6.1319, "cat": "capital", "note": "Capital of Luxembourg.", "source": "-", "date": "", "linked_items": []}, {"id": "madrid", "name": "Madrid", "lat": 40.4168, "lon": -3.7038, "cat": "capital", "note": "Capital of Spain.", "source": "-", "date": "", "linked_items": []}, {"id": "lisbon", "name": "Lisbon", "lat": 38.7223, "lon": -9.1393, "cat": "capital", "note": "Capital of Portugal.", "source": "-", "date": "", "linked_items": []}, {"id": "rome", "name": "Rome", "lat": 41.9028, "lon": 12.4964, "cat": "capital", "note": "Capital of Italy.", "source": "-", "date": "", "linked_items": []}, {"id": "vienna", "name": "Vienna", "lat": 48.2082, "lon": 16.3738, "cat": "capital", "note": "Capital of Austria.", "source": "-", "date": "", "linked_items": []}, {"id": "bern", "name": "Bern", "lat": 46.948, "lon": 7.4474, "cat": "capital", "note": "Federal city of Switzerland.", "source": "-", "date": "", "linked_items": []}, {"id": "prague", "name": "Prague", "lat": 50.0755, "lon": 14.4378, "cat": "capital", "note": "Capital of Czechia.", "source": "-", "date": "", "linked_items": []}, {"id": "bratislava", "name": "Bratislava", "lat": 48.1486, "lon": 17.1077, "cat": "capital", "note": "Capital of Slovakia.", "source": "-", "date": "", "linked_items": []}, {"id": "budapest", "name": "Budapest", "lat": 47.4979, "lon": 19.0402, "cat": "capital", "note": "Capital of Hungary.", "source": "-", "date": "", "linked_items": []}, {"id": "warsaw", "name": "Warsaw", "lat": 52.2297, "lon": 21.0122, "cat": "capital", "note": "Capital of Poland.", "source": "-", "date": "", "linked_items": []}, {"id": "vilnius", "name": "Vilnius", "lat": 54.6872, "lon": 25.2797, "cat": "capital", "note": "Capital of Lithuania.", "source": "-", "date": "", "linked_items": []}, {"id": "riga", "name": "Riga", "lat": 56.9496, "lon": 24.1052, "cat": "capital", "note": "Capital of Latvia.", "source": "-", "date": "", "linked_items": []}, {"id": "tallinn", "name": "Tallinn", "lat": 59.437, "lon": 24.7536, "cat": "capital", "note": "Capital of Estonia.", "source": "-", "date": "", "linked_items": []}, {"id": "helsinki", "name": "Helsinki", "lat": 60.1699, "lon": 24.9384, "cat": "capital", "note": "Capital of Finland.", "source": "-", "date": "", "linked_items": []}, {"id": "stockholm", "name": "Stockholm", "lat": 59.3293, "lon": 18.0686, "cat": "capital", "note": "Capital of Sweden.", "source": "-", "date": "", "linked_items": []}, {"id": "oslo", "name": "Oslo", "lat": 59.9139, "lon": 10.7522, "cat": "capital", "note": "Capital of Norway.", "source": "-", "date": "", "linked_items": []}, {"id": "copenhagen", "name": "Copenhagen", "lat": 55.6761, "lon": 12.5683, "cat": "capital", "note": "Capital of Denmark.", "source": "-", "date": "", "linked_items": []}, {"id": "athens", "name": "Athens", "lat": 37.9838, "lon": 23.7275, "cat": "capital", "note": "Capital of Greece.", "source": "-", "date": "", "linked_items": []}, {"id": "sofia", "name": "Sofia", "lat": 42.6977, "lon": 23.3219, "cat": "capital", "note": "Capital of Bulgaria.", "source": "-", "date": "", "linked_items": []}, {"id": "bucharest", "name": "Bucharest", "lat": 44.4268, "lon": 26.1025, "cat": "capital", "note": "Capital of Romania.", "source": "-", "date": "", "linked_items": []}, {"id": "chisinau", "name": "Chișinău", "lat": 47.0105, "lon": 28.8638, "cat": "capital", "note": "Capital of Moldova.", "source": "-", "date": "", "linked_items": []}, {"id": "kyiv", "name": "Kyiv", "lat": 50.4501, "lon": 30.5234, "cat": "capital", "note": "Capital of Ukraine.", "source": "-", "date": "", "linked_items": []}, {"id": "minsk", "name": "Minsk", "lat": 53.9045, "lon": 27.5615, "cat": "capital", "note": "Capital of Belarus.", "source": "-", "date": "", "linked_items": []}, {"id": "moscow", "name": "Moscow", "lat": 55.7558, "lon": 37.6173, "cat": "capital", "note": "Capital of Russia.", "source": "-", "date": "", "linked_items": []}, {"id": "ankara", "name": "Ankara", "lat": 39.9334, "lon": 32.8597, "cat": "capital", "note": "Capital of Turkey.", "source": "-", "date": "", "linked_items": []}, {"id": "belgrade", "name": "Belgrade", "lat": 44.7866, "lon": 20.4489, "cat": "capital", "note": "Capital of Serbia.", "source": "-", "date": "", "linked_items": []}, {"id": "sarajevo", "name": "Sarajevo", "lat": 43.8563, "lon": 18.4131, "cat": "capital", "note": "Capital of Bosnia and Herzegovina.", "source": "-", "date": "", "linked_items": []}, {"id": "zagreb", "name": "Zagreb", "lat": 45.815, "lon": 15.9819, "cat": "capital", "note": "Capital of Croatia.", "source": "-", "date": "", "linked_items": []}, {"id": "ljubljana", "name": "Ljubljana", "lat": 46.0569, "lon": 14.5058, "cat": "capital", "note": "Capital of Slovenia.", "source": "-", "date": "", "linked_items": []}, {"id": "podgorica", "name": "Podgorica", "lat": 42.4304, "lon": 19.2594, "cat": "capital", "note": "Capital of Montenegro.", "source": "-", "date": "", "linked_items": []}, {"id": "skopje", "name": "Skopje", "lat": 41.9981, "lon": 21.4254, "cat": "capital", "note": "Capital of North Macedonia.", "source": "-", "date": "", "linked_items": []}, {"id": "tirana", "name": "Tirana", "lat": 41.3275, "lon": 19.8187, "cat": "capital", "note": "Capital of Albania.", "source": "-", "date": "", "linked_items": []}, {"id": "pristina", "name": "Pristina (Kosovo)", "lat": 42.6629, "lon": 21.1655, "cat": "capital", "note": "Capital of Kosovo, which declared independence in 2008. Recognised by many states, not all (Serbia does not recognise it).", "source": "public information (recognition status disputed)", "date": "", "linked_items": []}, {"id": "nicosia", "name": "Nicosia (divided capital)", "lat": 35.1856, "lon": 33.3823, "cat": "capital", "note": "Capital of Cyprus. The island has been divided since 1974; the north is recognised only by Turkey.", "source": "public information (division disputed)", "date": "", "linked_items": []}, {"id": "valletta", "name": "Valletta", "lat": 35.8997, "lon": 14.5146, "cat": "capital", "note": "Capital of Malta.", "source": "-", "date": "", "linked_items": []}, {"id": "nato_shape", "name": "SHAPE, NATO Supreme Headquarters (Mons area)", "lat": 50.4, "lon": 3.95, "cat": "cantonment", "note": "NATO's military headquarters for Europe, near Mons, Belgium. Location approximate.", "source": "NATO (public information)", "date": "", "linked_items": []}, {"id": "ramstein", "name": "Ramstein Air Base (Germany)", "lat": 49.4369, "lon": 7.6003, "cat": "air_base", "note": "US Air Forces in Europe headquarters and a major US air hub (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "lakenheath", "name": "RAF Lakenheath (UK, US Air Force)", "lat": 52.4093, "lon": 0.5611, "cat": "air_base", "note": "Royal Air Force station used by the US Air Force (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "aviano", "name": "Aviano Air Base (Italy)", "lat": 46.0319, "lon": 12.5965, "cat": "air_base", "note": "US Air Force base in northern Italy (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "incirlik", "name": "Incirlik Air Base (Turkey, NATO)", "lat": 37.002, "lon": 35.4259, "cat": "air_base", "note": "NATO air base used by Turkey and the United States. Press and FAS reporting says US nuclear weapons are stored here; not officially confirmed.", "source": "FAS (reported); press reporting", "date": "", "linked_items": []}, {"id": "baltiysk", "name": "Baltic Fleet headquarters, Baltiysk", "lat": 54.6504, "lon": 19.9009, "cat": "navy_base", "note": "Headquarters of the Russian Baltic Fleet (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "kaliningrad", "name": "Kaliningrad exclave", "lat": 54.7104, "lon": 20.4522, "cat": "flashpoint", "note": "Russian exclave between Poland and Lithuania, home to the Baltic Fleet. Its military deployment is widely reported as a NATO concern.", "source": "public information; press reporting", "date": "", "linked_items": []}, {"id": "severomorsk", "name": "Northern Fleet headquarters, Severomorsk", "lat": 69.07, "lon": 33.43, "cat": "navy_base", "note": "Headquarters of the Russian Northern Fleet (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "sevastopol", "name": "Black Sea Fleet headquarters, Sevastopol (Crimea)", "lat": 44.6166, "lon": 33.5254, "cat": "navy_base", "note": "Black Sea Fleet headquarters in Sevastopol. Crimea is occupied by Russia since 2014; Ukraine and most UN member states regard it as Ukrainian.", "source": "public information (sovereignty disputed)", "date": "", "linked_items": []}, {"id": "portsmouth", "name": "HMNB Portsmouth (Royal Navy)", "lat": 50.8, "lon": -1.11, "cat": "navy_base", "note": "Principal Royal Navy base in southern England (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "faslane", "name": "HMNB Clyde, Faslane (UK submarine base)", "lat": 56.069, "lon": -4.823, "cat": "submarine_base", "note": "Home of the UK's nuclear-armed submarines (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "ile_longue", "name": "Île Longue (French strategic submarine base)", "lat": 48.3117, "lon": -4.4997, "cat": "submarine_base", "note": "French base for nuclear-armed submarines near Brest (public information). Location approximate.", "source": "public information (approximate location)", "date": "", "linked_items": []}, {"id": "brest", "name": "Brest (French Atlantic naval base)", "lat": 48.3905, "lon": -4.4861, "cat": "navy_base", "note": "French Navy base on the Atlantic coast (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "toulon", "name": "Toulon (French Mediterranean naval base)", "lat": 43.1242, "lon": 5.928, "cat": "navy_base", "note": "Main French Navy base in the Mediterranean (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "kiel", "name": "Kiel (German naval base)", "lat": 54.3233, "lon": 10.1228, "cat": "navy_base", "note": "Principal German naval base (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "gdynia", "name": "Gdynia (Polish naval base)", "lat": 54.5189, "lon": 18.5305, "cat": "navy_base", "note": "Principal Polish Navy base on the Baltic (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "karlskrona", "name": "Karlskrona (Swedish naval base)", "lat": 56.1612, "lon": 15.5869, "cat": "navy_base", "note": "Main base of the Swedish Navy (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "la_spezia", "name": "La Spezia (Italian naval base)", "lat": 44.1024, "lon": 9.824, "cat": "navy_base", "note": "Principal Italian Navy base (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "rota", "name": "Naval Station Rota (US Navy, Spain)", "lat": 36.645, "lon": -6.349, "cat": "navy_base", "note": "US Navy base in southern Spain (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "znpp", "name": "Zaporizhzhia nuclear power plant", "lat": 47.5117, "lon": 34.5853, "cat": "nuclear_site", "note": "Europe's largest nuclear plant. Under Russian control since March 2022, according to IAEA reporting. Status changes; verify with the latest IAEA update.", "source": "IAEA reporting (not re-verified in this build)", "date": "", "linked_items": []}, {"id": "chornobyl", "name": "Chornobyl nuclear plant and exclusion zone", "lat": 51.389, "lon": 30.099, "cat": "nuclear_site", "note": "Site of the 1986 accident, now a decommissioning site and exclusion zone (IAEA reporting).", "source": "IAEA reporting", "date": "", "linked_items": []}, {"id": "sellafield", "name": "Sellafield nuclear site (UK)", "lat": 54.42, "lon": -3.49, "cat": "nuclear_site", "note": "Nuclear reprocessing and decommissioning site in Cumbria (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "la_hague", "name": "La Hague reprocessing plant (France)", "lat": 49.68, "lon": -1.88, "cat": "nuclear_site", "note": "Nuclear fuel reprocessing plant in Normandy (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "plesetsk", "name": "Plesetsk Cosmodrome (Russia)", "lat": 62.925, "lon": 40.577, "cat": "space_site", "note": "Russian military and civil space launch site (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "andoya", "name": "Andøya Space rocket range (Norway)", "lat": 69.3, "lon": 16.0, "cat": "space_site", "note": "Norwegian rocket launch range in the Arctic (public information). Location approximate.", "source": "public information (approximate location)", "date": "", "linked_items": []}, {"id": "esoc", "name": "ESA Operations Centre, Darmstadt", "lat": 49.87, "lon": 8.65, "cat": "space_site", "note": "European Space Agency's mission control centre (public information). Location approximate.", "source": "public information (approximate location)", "date": "", "linked_items": []}, {"id": "bosphorus", "name": "Bosphorus (Istanbul strait)", "lat": 41.12, "lon": 29.07, "cat": "chokepoint", "note": "Strait through Istanbul, governed by the 1936 Montreux Convention (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "dardanelles", "name": "Dardanelles (Turkey)", "lat": 40.2, "lon": 26.4, "cat": "chokepoint", "note": "Strait under the 1936 Montreux Convention (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "gibraltar_strait", "name": "Strait of Gibraltar", "lat": 35.95, "lon": -5.6, "cat": "chokepoint", "note": "Strait between Europe and Africa (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "oresund", "name": "Øresund (Denmark-Sweden strait)", "lat": 55.65, "lon": 12.65, "cat": "chokepoint", "note": "Strait between Denmark and Sweden, at Copenhagen (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "kerch", "name": "Kerch Strait (Crimean bridge)", "lat": 45.35, "lon": 36.55, "cat": "chokepoint", "note": "Strait between the Black Sea and the Sea of Azov, crossed by the Crimean Bridge. Crimea's status is disputed.", "source": "public information (sovereignty disputed)", "date": "", "linked_items": []}, {"id": "odesa", "name": "Odesa ports (Black Sea grain corridor)", "lat": 46.48, "lon": 30.73, "cat": "chokepoint", "note": "Black Sea ports used for grain exports during the 2022-23 shipping arrangements (press reporting).", "source": "press reporting", "date": "", "linked_items": []}, {"id": "nord_stream", "name": "Nord Stream pipelines (Baltic Sea, near Bornholm)", "lat": 55.5, "lon": 15.8, "cat": "pipeline", "note": "Four explosions damaged Nord Stream 1 and 2 on 26 September 2022. Investigations by Swedish and Danish authorities continued; attribution is not settled in official findings. Location approximate.", "source": "ACLED; Swedish and Danish investigations (approximate location)", "date": "", "linked_items": []}, {"id": "turkstream", "name": "TurkStream gas pipeline landfall (Kıyıköy, Turkey)", "lat": 41.61, "lon": 28.12, "cat": "pipeline", "note": "Russia-Turkey gas pipeline landfall in Turkey. Location approximate.", "source": "public information (approximate location)", "date": "", "linked_items": []}, {"id": "suwalki", "name": "Suwałki Gap (Poland-Lithuania border)", "lat": 54.2, "lon": 23.0, "cat": "flashpoint", "note": "Narrow land corridor between Belarus and Kaliningrad, often cited as NATO's most exposed land link (public information). Location approximate.", "source": "public information (approximate location)", "date": "", "linked_items": []}, {"id": "narva", "name": "Narva (Estonia-Russia border)", "lat": 59.37, "lon": 28.19, "cat": "flashpoint", "note": "Border town on the Estonia-Russia frontier (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "donetsk", "name": "Donetsk region (front line, Ukraine)", "lat": 48.0, "lon": 37.8, "cat": "flashpoint", "note": "Frontline area where parts remain under Russian control, according to press reporting. The front line changes; verify the latest situation.", "source": "press reporting (front lines change)", "date": "", "linked_items": []}, {"id": "transnistria", "name": "Tiraspol (Transnistria)", "lat": 46.85, "lon": 29.63, "cat": "flashpoint", "note": "Transnistria is not controlled by Moldova. Russian forces are present there, according to press reporting.", "source": "press reporting (status disputed)", "date": "", "linked_items": []}, {"id": "gibraltar", "name": "Gibraltar (UK territory, claimed by Spain)", "lat": 36.14, "lon": -5.35, "cat": "flashpoint", "note": "British Overseas Territory that Spain claims (public information).", "source": "public information (sovereignty disputed)", "date": "", "linked_items": []}], "connector_status": [{"name": "offline_seed", "configured": true, "ok": true, "message": "Offline snapshot: reference items and strategic sites only; backend not connected", "item_count": 7}], "total_items": 7};
  const CAT_META = {"military": {"label": "Military & Strategic", "color": "var(--amber)"}, "economic": {"label": "Economic & Trade", "color": "var(--cyan-h)"}, "political": {"label": "Political & Diplomatic", "color": "var(--green)"}, "hazard": {"label": "Natural Hazards", "color": "var(--violet)"}, "aviation": {"label": "Aviation & Maritime Notices", "color": "var(--violet)"}, "strategic": {"label": "Strategic & Arms Monitoring", "color": "var(--magenta)"}, "cyber": {"label": "Cyber & MSS", "color": "var(--red)"}, "space": {"label": "Space Program", "color": "var(--cyan-h)"}, "social_local": {"label": "Social pulse", "color": "var(--gold)"}, "social_global": {"label": "Social pulse (global)", "color": "var(--gold)"}};

  function escapeHtml(s){
    if(s === null || s === undefined) return "";
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function project(lon, lat){
    const lambda = lon * Math.PI/180, phi = lat * Math.PI/180;
    const x = lambda, y = Math.log(Math.tan(Math.PI/4 + phi/2));
    return [PROJ.translate[0] + x*PROJ.scale, PROJ.translate[1] - y*PROJ.scale];
  }

  const MARKER_COLOR = {"capital": "#c9a35c", "flashpoint": "#ef5354", "chokepoint": "#f59e0b", "hazard": "#58c4ff", "submarine_base": "#fb923c", "navy_base": "#f97316", "carrier_port": "#fdba74", "cantonment": "#c084fc", "nuclear_site": "#facc15", "space_site": "#06b6d4", "satellite_station": "#60a5fa", "defense_industry": "#84cc16", "pipeline": "#4ade80", "nuclear_plant": "#eab308", "air_base": "#a78bfa", "airport": "#38bdf8", "seaport": "#22c55e", "custom": "#ffffff"};

  // ---------------- 72h / All-time window ----------------
  let timeWindow = "72h";   // default per request; stays until the user picks otherwise
  const WINDOW_MS = 72 * 3600 * 1000;

  // Robust across the formats the connectors actually emit: ISO, RFC-822 (RSS
  // "published"), GDELT "YYYYMMDDTHHMMSSZ", and USGS epoch-ms as a string.
  function parseItemDate(s){
    if(!s) return null;
    if(/^\d{13}$/.test(String(s))) return new Date(parseInt(s, 10));
    const g = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(String(s));
    if(g) return new Date(Date.UTC(+g[1], +g[2]-1, +g[3], +g[4], +g[5], +g[6]));
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function inWindow(it){
    if(timeWindow === "all") return true;
    const d = parseItemDate(it.date);
    // Strict by design: an item with no verifiable timestamp (background
    // reference entries dated "ongoing"/"background", or a date string that
    // can't be parsed) is NOT shown in the 72h view - claiming it's "last
    // 72 hours" news when nothing proves that would break the one rule this
    // toggle exists to enforce. Switch to All Time to see them.
    if(!d) return false;
    return (Date.now() - d.getTime()) <= WINDOW_MS;
  }
  function windowedCats(cats){
    const out = {};
    Object.keys(cats).forEach(function(k){ out[k] = (cats[k]||[]).filter(inWindow); });
    return out;
  }

  let currentData = null, isLive = false;
  // start activeLayers from whatever the checkboxes actually show as checked
  // in the HTML (event layers on, infrastructure layers off by default),
  // rather than hardcoding it separately and risking the two going out of sync
  let activeLayers = new Set(
    Array.from(document.querySelectorAll(".layer-cb")).filter(cb => cb.checked).map(cb => cb.dataset.layer)
  );
  let refreshTimer = null;
  let customMarkers = [];

  // ---------------- data loading ----------------
  async function loadData(manual){
    const btn = document.getElementById("refreshBtn");
    if(manual && btn){ btn.classList.add("spinning"); btn.disabled = true; }
    try {
      const url = manual ? "/api/refresh" : "/api/snapshot";
      const opts = manual ? {method:"POST"} : {cache:"no-store"};
      const res = await fetch(url, opts);
      if(!res.ok){
        if(res.status === 429){ const j = await res.json().catch(()=>({})); throw new Error(j.error || "rate limited"); }
        // try to surface the server's own error detail (e.g. a specific
        // connector/rendering failure), not just the bare status code
        const body = await res.json().catch(()=>null);
        throw new Error(body && body.error ? ("HTTP " + res.status + ": " + body.error) : ("HTTP " + res.status));
      }
      const data = await res.json();
      currentData = data; isLive = true;
      render(data, true, null);
    } catch(e) {
      currentData = SEED_DATA; isLive = false;
      render(SEED_DATA, false, e.message);
    } finally {
      if(btn){ btn.classList.remove("spinning"); btn.disabled = false; }
    }
  }

  // ---------------- render orchestration ----------------
  function render(data, live, errMsg){
    // apply the 72h / All-time window ONCE, then everything below (panels,
    // KPIs, map dots) reads from the same filtered view - they can't disagree
    const view = Object.assign({}, data, {items_by_category: windowedCats(data.items_by_category || {})});
    view.markers = (data.markers || []).map(function(m){
      return Object.assign({}, m, {linked_items: (m.linked_items || []).filter(inWindow)});
    });
    renderStatusBar(live, view, errMsg);
    renderKPIs(view);
    renderMarkers(view.markers, view.items_by_category);
    renderPanels(view.items_by_category);
    renderTicker(view);
    renderDarkWeb(view);
    renderConnectorStrip(view.connector_status || [], live);
    applyFilter(); // keep an active search query applied across re-renders
  }

  function renderStatusBar(live, data, errMsg){
    const pill = document.getElementById("statusPill");
    const txt = document.getElementById("statusPillText");
    const banner = document.getElementById("offlineBanner");
    const footerNote = document.getElementById("footerNote");
    const snapDate = document.getElementById("snapDate");
    if(live){
      pill.className = "status-pill live"; txt.textContent = "Live backend";
      banner.classList.remove("show");
      const when = data.updated_at ? new Date(data.updated_at*1000).toLocaleTimeString() : "just now";
      snapDate.textContent = "Backend last polled " + when;
      footerNote.innerHTML = "Live backend connected &middot; " + (data.total_items||0) + " items in feed &middot; not investment/operational advice, verify time-critical items against primary sources";
    } else {
      pill.className = "status-pill offline"; txt.textContent = "Offline snapshot";
      banner.classList.add("show");
      banner.innerHTML = "<b>Backend not reachable" + (errMsg ? " (" + escapeHtml(errMsg) + ")" : "") +
        "</b> &mdash; showing the embedded Aug 10, 2026 research snapshot instead of live data. " +
        "Run <code>python run.py</code> and reload this page to connect the real backend.";
      snapDate.textContent = "Offline snapshot - Aug 10, 2026";
      footerNote.textContent = "Offline snapshot mode - start the Python backend for live data.";
    }
  }

  function countItems(cats, dataObj){
    let n = 0;
    cats.forEach(c => n += (dataObj[c]||[]).length);
    return n;
  }

  function renderKPIs(data){
    const cats = data.items_by_category || {};
    document.getElementById("kpi-markers").textContent = (data.markers||[]).length;
    document.getElementById("kpi-military").textContent = (cats.milops||[]).length;
    document.getElementById("kpi-economic").textContent = (cats.econ||[]).length;
    document.getElementById("kpi-political").textContent = (cats.geo||[]).length;
    document.getElementById("kpi-hazard").textContent = (cats.hazard||[]).length;
    document.getElementById("kpi-darkweb").textContent = (cats.darkweb||[]).length;
    document.getElementById("count-markers").textContent = (data.markers||[]).length + " sites";
    const infraNote = document.getElementById("infraNote");
    if(infraNote){
      const info = data.infrastructure || {};
      if(isLive){
        infraNote.textContent = (info.airport_count||0) + " airports live from OurAirports (CC0 dataset) + " +
          "verified seaports/naval bases/defense HQs. Real-time ship/submarine positions aren't shown - " +
          "no open source publishes that for any navy (see README).";
      } else {
        infraNote.textContent = "Offline snapshot: infrastructure markers frozen from build time, not live.";
      }
    }
  }

  // ---------------- map markers ----------------
  function addMarkerEl(layer, m, color, extra){
    const [x,y] = project(m.lon, m.lat);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "marker");
    g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
    g.dataset.name = m.name; g.dataset.note = m.note || "";
    g.dataset.source = m.source || ""; g.dataset.date = m.date || "";
    g.dataset.color = color;
    g.dataset.linked = JSON.stringify(m.linked_items || []);
    const pulse = (m.linked_items && m.linked_items.length) || (extra && extra.pulse);
    g.innerHTML = (pulse ? '<circle class="pulse" r="5" fill="none" stroke="'+color+'" stroke-width="1.6"/>' : '') +
                  '<circle class="core" r="3.4" fill="'+color+'"/>';
    layer.appendChild(g);
  }

  function renderMarkers(markers, cats){
    const layer = document.getElementById("markerLayer");
    if(!layer) return;
    layer.innerHTML = "";
    // 1. named strategic sites (pulse when a windowed headline mentions them)
    (markers || []).forEach(function(m){
      if(!activeLayers.has(m.cat)) return;
      addMarkerEl(layer, m, MARKER_COLOR[m.cat] || "#c9a35c");
    });
    // 2. any windowed item that carries its OWN coordinates (USGS quakes) -
    // a real lat/lon from the source, not a guess
    if(activeLayers.has("hazard")){
      Object.keys(cats || {}).forEach(function(k){
        (cats[k] || []).forEach(function(it){
          if(typeof it.lat === "number" && typeof it.lon === "number"){
            addMarkerEl(layer, {name: it.label, note: it.text, source: it.source, date: it.date,
              lat: it.lat, lon: it.lon, linked_items: []}, MARKER_COLOR.hazard, {pulse: true});
          }
        });
      });
    }
    // 3. the user's own plotted markers
    if(activeLayers.has("custom")){
      customMarkers.forEach(function(cm){
        addMarkerEl(layer, {name: cm.label, note: cm.remark || "(no remark)", source: "You",
          date: cm.added, lat: cm.lat, lon: cm.lon, linked_items: []}, MARKER_COLOR.custom, {pulse: true});
      });
    }
    wireMarkerEvents();
  }

  function wireMarkerEvents(){
    const wrap = document.getElementById("mapWrap");
    const tip = document.getElementById("mapTip");
    if(!wrap || !tip) return;
    function hideTip(){ tip.classList.remove("show"); }
    function positionTip(evt){
      const rect = wrap.getBoundingClientRect();
      let cx, cy;
      if(evt.touches && evt.touches[0]){ cx = evt.touches[0].clientX; cy = evt.touches[0].clientY; }
      else { cx = evt.clientX; cy = evt.clientY; }
      let x = cx - rect.left, y = cy - rect.top;
      const tw = 260, th = 130;
      if(x + tw + 24 > rect.width) x = x - tw - 18; else x = x + 16;
      if(y + th + 20 > rect.height) y = Math.max(4, y - th - 10); else y = y + 14;
      tip.style.left = x+"px"; tip.style.top = y+"px";
    }
    function showTip(m, evt){
      const name = m.dataset.name, note = m.dataset.note, source = m.dataset.source,
            date = m.dataset.date, color = m.dataset.color;
      let linked = [];
      try { linked = JSON.parse(m.dataset.linked || "[]"); } catch(e){ linked = []; }
      let html = '<div class="t-name" style="color:'+color+'">'+escapeHtml(name)+'</div>' +
                 '<div>'+escapeHtml(note)+'</div>' +
                 '<div class="t-meta">'+escapeHtml(source)+(date?(" &middot; "+escapeHtml(date)):"")+'</div>';
      if(linked.length){
        html += '<div class="t-meta" style="margin-top:6px;color:var(--text-dim);">Recent related items:</div>';
        linked.slice(0,3).forEach(function(li){
          html += '<div class="marker-tt-link">&bull; ' + escapeHtml((li.label||"").slice(0,60)) + '</div>';
        });
      }
      tip.innerHTML = html;
      positionTip(evt);
      tip.classList.add("show");
    }
    wrap.querySelectorAll(".marker").forEach(function(m){
      m.addEventListener("mouseenter", function(evt){ showTip(m, evt); });
      m.addEventListener("mousemove", positionTip);
      m.addEventListener("mouseleave", hideTip);
      m.addEventListener("click", function(evt){
        if(tip.classList.contains("show")){ hideTip(); } else { showTip(m, evt); }
      });
    });
    wrap.removeEventListener("mouseleave", hideTip);
    wrap.addEventListener("mouseleave", hideTip);
  }

  // layer toggle checkboxes
  document.querySelectorAll(".layer-cb").forEach(function(cb){
    cb.addEventListener("change", function(){
      const cat = cb.dataset.layer;
      if(cb.checked) activeLayers.add(cat); else activeLayers.delete(cat);
      if(currentData) renderMarkers(currentData.markers || []);
    });
  });

  // ---------------- panels ----------------
  // Only http(s) URLs ever become links. A feed-supplied "javascript:" / "data:" URL
  // would otherwise be a click-to-run XSS even though every text field is escaped.
  function safeUrl(u){
    if(!u) return null;
    try { const x = new URL(String(u)); return (x.protocol === "http:" || x.protocol === "https:") ? x.href : null; }
    catch(e){ return null; }
  }
  function fmtDate(s){
    const d = parseItemDate(s);
    return d ? d.toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : (s || "");
  }
  function itemHtml(it){
    const href = safeUrl(it.url);
    return '<div class="item" data-search="'+escapeHtml(((it.label||"")+" "+(it.text||"")).toLowerCase())+'">' +
      '<div class="lbl">'+escapeHtml(it.label)+'</div>' +
      (it.text && it.text !== it.label ? '<div class="txt">'+escapeHtml(it.text)+'</div>' : '') +
      '<div class="meta">'+escapeHtml(it.source)+(it.date?(" &middot; "+escapeHtml(fmtDate(it.date))):"")+
      (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '')+
      '</div></div>';
  }

  function renderPanels(cats){
    const ids = HEADING_KEYS;
    ids.forEach(function(cat){
      const container = document.getElementById("items-"+cat);
      const countEl = document.getElementById("count-"+cat);
      if(!container) return;
      const list = (cats[cat] || []).slice(0, 25);
      if(countEl) countEl.textContent = list.length;
      container.innerHTML = list.length
        ? list.map(itemHtml).join("")
        : '<div class="empty-note">' + (timeWindow === "72h"
            ? (isLive
                ? 'Nothing in the last 72 hours for this heading. Switch to <b>All Time</b> (top right) to see older items.'
                : 'Backend offline - the embedded research snapshot is older than 72 hours, so it is hidden in this view. Switch to <b>All Time</b> to read it, or start the backend for live news.')
            : 'No items for this heading yet.') + '</div>';
    });
  }

  // ---------------- connector status strip ----------------
  function renderConnectorStrip(statuses, live){
    const el = document.getElementById("connectorStrip");
    const note = document.getElementById("methodNote");
    if(!live){
      el.innerHTML = '<span class="conn-badge off">offline snapshot - connectors not queried</span>';
      note.textContent = "Backend not connected. Start it with: python run.py  (see README.md)";
      return;
    }
    el.innerHTML = statuses.map(function(s){
      const cls = !s.configured ? "off" : (s.ok ? "ok" : "err");
      const label = s.name + (s.configured ? (s.ok ? " \u2713 " + s.item_count : " \u2717") : " (not set)");
      return '<span class="conn-badge '+cls+'" title="'+escapeHtml(s.message||"")+'">'+escapeHtml(label)+'</span>';
    }).join("");
    const okCount = statuses.filter(s=>s.ok).length;
    note.textContent = okCount + " of " + statuses.length + " connectors returned data this poll. " +
      "Hover a badge for its exact status message. Add API keys in .env or via secure_setup.py to enable more.";
  }

  // ---------------- search filter ----------------
  let lastQuery = "";
  function applyFilter(){
    const q = lastQuery;
    document.querySelectorAll(".item[data-search]").forEach(function(it){
      if(!q){ it.classList.remove("dim"); return; }
      const hay = it.getAttribute("data-search") || "";
      if(hay.indexOf(q) === -1) it.classList.add("dim"); else it.classList.remove("dim");
    });
  }
  const filterInput = document.getElementById("filterInput");
  if(filterInput){
    filterInput.addEventListener("input", function(){
      lastQuery = filterInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  // ---------------- refresh button ----------------
  const refreshBtn = document.getElementById("refreshBtn");
  if(refreshBtn) refreshBtn.addEventListener("click", function(){ loadData(true); });

  // ---------------- settings modal (API keys) ----------------
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const saveKeysBtn = document.getElementById("saveKeysBtn");
  const keyFieldsEl = document.getElementById("keyFields");
  const settingsMsg = document.getElementById("settingsMsg");

  async function openSettings(){
    settingsBackdrop.classList.add("show");
    settingsMsg.textContent = ""; settingsMsg.className = "modal-msg";
    keyFieldsEl.innerHTML = "Loading&hellip;";
    try {
      const res = await fetch("/api/keys");
      if(!res.ok) throw new Error("HTTP " + res.status);
      const fields = await res.json();
      keyFieldsEl.innerHTML = Object.keys(fields).map(function(name){
        const f = fields[name];
        return '<div class="key-field">' +
          '<label><span class="kf-status'+(f.configured?" on":"")+'"></span>' + escapeHtml(f.label) +
          (f.configured ? ' <span style="font-weight:400;color:var(--text-faint);">(set via '+escapeHtml(f.source)+')</span>' : '') +
          '</label>' +
          '<div class="kf-help">'+escapeHtml(f.help)+'</div>' +
          '<input type="password" data-key="'+name+'" placeholder="'+
            (f.configured ? "Already set - paste a new value to replace it" : "Paste key here, or leave blank to skip") +
          '" autocomplete="off"/></div>';
      }).join("");
    } catch(e) {
      keyFieldsEl.innerHTML = '<div class="modal-msg err">Could not load key status: ' + escapeHtml(e.message) +
        (isLive ? "" : " (backend not connected - start it with python run.py first)") + '</div>';
    }
  }
  function closeSettings(){ settingsBackdrop.classList.remove("show"); }

  if(settingsBtn) settingsBtn.addEventListener("click", openSettings);
  if(closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
  if(settingsBackdrop) settingsBackdrop.addEventListener("click", function(e){
    if(e.target === settingsBackdrop) closeSettings();
  });

  if(saveKeysBtn) saveKeysBtn.addEventListener("click", async function(){
    const inputs = keyFieldsEl.querySelectorAll("input[data-key]");
    const body = {};
    inputs.forEach(function(inp){ if(inp.value.trim()) body[inp.dataset.key] = inp.value.trim(); });
    if(!Object.keys(body).length){
      settingsMsg.textContent = "Nothing to save - all fields blank."; settingsMsg.className = "modal-msg";
      return;
    }
    saveKeysBtn.disabled = true; saveKeysBtn.textContent = "Saving\u2026";
    try {
      const res = await fetch("/api/keys", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      settingsMsg.textContent = "Saved " + j.saved.length + " key(s), encrypted. Reconnecting\u2026";
      settingsMsg.className = "modal-msg ok";
      await loadData(true);
      setTimeout(function(){ openSettings(); }, 400); // refresh the configured/not-configured status shown
    } catch(e) {
      settingsMsg.textContent = "Save failed: " + e.message;
      settingsMsg.className = "modal-msg err";
    } finally {
      saveKeysBtn.disabled = false; saveKeysBtn.textContent = "Save & reconnect";
    }
  });

  // ---------------- live clock ----------------
  function pad(n){ return n<10 ? "0"+n : n; }
  function tickClock(){
    const d = new Date();
    const el = document.getElementById("snapClock");
    if(el) el.textContent = pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds())+" local";
  }
  tickClock(); setInterval(tickClock, 1000);

  // ---------------- running news ticker (unlocated news, newest first, bottom->top) ----------------
  function ts(it){ const d = parseItemDate(it.date); return d ? d.getTime() : 0; }
  function wireTickerPause(){
    const viewport = document.getElementById("tickerViewport");
    const track = document.getElementById("tickerTrack");
    if(!viewport || !track) return;
    viewport.onpointerenter = function(){ track.classList.add("paused"); };
    viewport.onpointerleave = function(){ track.classList.remove("paused"); };
    viewport.ontouchstart = function(){ track.classList.add("paused"); };
    viewport.ontouchend = function(){ track.classList.remove("paused"); };
  }
  function in72h(it){
    const d = parseItemDate(it.date);
    if(!d) return false;                       // undated background items never qualify as "latest news"
    return (Date.now() - d.getTime()) <= 72 * 3600 * 1000;
  }
  function renderTicker(view){
    // The running feed is ALWAYS the last 72 hours - it ignores the All-Time toggle.
    const track = document.getElementById("tickerTrack");
    const cnt = document.getElementById("count-ticker");
    if(!track) return;
    const src = (currentData && currentData.items_by_category) || {};
    const all = [];
    Object.keys(src).forEach(function(k){
      (src[k] || []).forEach(function(it){
        if(!(typeof it.lat === "number" && typeof it.lon === "number") && in72h(it)) all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const list = all.slice(0, 80);
    if(cnt) cnt.textContent = list.length + " in 72h";
    if(!list.length){
      track.innerHTML = '<div class="empty-note" style="padding:14px;">No unlocated news in the last 72 hours yet.</div>';
      return;
    }
    const TAG = {geo:["GEO","var(--green)"], milops:["MIL","var(--amber)"], arms:["ARMS","var(--magenta)"],
      naval:["NAVAL","var(--cyan-h)"], scs:["SCS","var(--cyan-h)"], air:["AIR","var(--violet)"], space:["SPACE","var(--cyan-h)"],
      tech:["TECH","var(--gold)"], cyber:["CYBER","var(--red)"], darkweb:["DARK","var(--red)"], econ:["ECON","var(--cyan-h)"],
      mss:["MSS","var(--amber)"], social:["SOC","var(--gold)"], wellbeing:["WELL","var(--magenta)"], hazard:["HAZ","var(--violet)"]};
    const one = list.map(function(it){
      const t = TAG[it.category] || ["NEWS","var(--cyan-h)"];
      return '<div class="tick-item"><span class="tag" style="background:'+t[1]+'">'+t[0]+'</span>' +
        '<span class="txt">'+escapeHtml(it.label)+'</span>' +
        '<div class="meta">'+escapeHtml(it.source)+(it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '')+'</div></div>';
    }).join("");
    track.innerHTML = one + one;
    wireTickerPause();
  }

  function renderDarkWeb(view){
    const el = document.getElementById("items-darkweb");
    if(!el) return;
    const want = document.getElementById("darkwebFilter").value;
    const all = [];
    Object.keys(view.items_by_category || {}).forEach(function(k){
      (view.items_by_category[k] || []).forEach(function(it){
        if(it.category === "darkweb") all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const shown = all.filter(function(it){ return want === "all" || it.in_region; }).slice(0, 80);
    document.getElementById("count-darkweb").textContent = shown.length + " of " + all.length;
    const LABEL = {ransomware_live:"Ransomware.live: ", telegram_public:"Telegram: ", darkweb_tor:"Dark web via Tor: "};
    const st = (view.connector_status || []).filter(function(s){ return LABEL[s.name]; })
      .map(function(s){ return LABEL[s.name] + s.message; });
    document.getElementById("darkwebStatus").textContent = st.join("   |   ");
    el.innerHTML = shown.length ? shown.map(function(it){
      const href = safeUrl(it.url);
      return '<div class="item"><div class="lbl">'+escapeHtml(it.label)+'</div><div class="meta">' +
        escapeHtml(it.source) + (it.country ? ' &middot; '+escapeHtml(it.country) : '') +
        (it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '') +
        (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '') +
        '</div></div>';
    }).join("") : '<div class="empty-note">No dark-web or threat-intel claims in the current window. ' +
        (timeWindow === "72h" ? 'Switch to All Time (top right) to see older claims.' : '') + '</div>';
  }

  // ---------------- radar sweep: 2D scanner rotating over the map (off for reduced-motion) ----------------
  // Cosmetic only, so it is isolated: a missing animation API or any error here
  // must never stop the data panels from rendering. Falls back to a timer when
  // requestAnimationFrame is unavailable (older or embedded browsers).
  try {
    (function radar(){
      const g = document.getElementById("radarSweep");
      if(!g || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
      const cx = g.getAttribute("data-cx"), cy = g.getAttribute("data-cy");
      const raf = (typeof window.requestAnimationFrame === "function")
        ? function(f){ window.requestAnimationFrame(f); }
        : function(f){ setTimeout(f, 33); };
      let a = 0;
      (function step(){
        a = (a + 0.5) % 360;
        g.setAttribute("transform", "rotate(" + a + " " + cx + " " + cy + ")");
        raf(step);
      })();
    })();
  } catch(e) { /* sweep is decoration; the dashboard works without it */ }

  const dwFilter = document.getElementById("darkwebFilter");
  if(dwFilter) dwFilter.addEventListener("change", function(){ if(currentData) render(currentData, isLive, null); });

  // ---------------- 72h / All-time toggle ----------------
  document.querySelectorAll(".wt-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      timeWindow = btn.dataset.window;
      document.querySelectorAll(".wt-btn").forEach(b => b.classList.toggle("active", b === btn));
      // re-render from what we already have - no new network call needed
      if(currentData) render(currentData, isLive, null);
    });
  });

  // ---------------- Plot a location (lat/long + remark) ----------------
  const plotBackdrop = document.getElementById("plotBackdrop");
  const plotMsg = document.getElementById("plotMsg");

  async function loadCustomMarkers(){
    try {
      const res = await fetch("/api/custom-markers", {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      customMarkers = (await res.json()).markers || [];
    } catch(e) { customMarkers = []; }
  }

  function renderCustomList(){
    const el = document.getElementById("customMarkersList");
    if(!customMarkers.length){ el.innerHTML = ""; return; }
    el.innerHTML = '<div style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">Your plotted markers:</div>' +
      customMarkers.map(function(m, i){
        return '<div class="custom-marker-row"><span><b>'+escapeHtml(m.label)+'</b> ('+m.lat+', '+m.lon+')' +
          (m.remark ? '<br/><span style="color:var(--text-faint);">'+escapeHtml(m.remark)+'</span>' : '') +
          '</span><button data-idx="'+i+'" title="Remove">&times;</button></div>';
      }).join("");
    el.querySelectorAll("button[data-idx]").forEach(function(btn){
      btn.addEventListener("click", async function(){
        try {
          const res = await fetch("/api/custom-markers/" + btn.dataset.idx, {method:"DELETE"});
          const j = await res.json();
          if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
          customMarkers = j.markers || [];
          renderCustomList();
          if(currentData) render(currentData, isLive, null);
        } catch(e) {
          plotMsg.textContent = "Remove failed: " + e.message; plotMsg.className = "modal-msg err";
        }
      });
    });
  }

  const plotBtn = document.getElementById("plotBtn");
  if(plotBtn) plotBtn.addEventListener("click", async function(){
    plotBackdrop.classList.add("show");
    plotMsg.textContent = ""; plotMsg.className = "modal-msg";
    await loadCustomMarkers();
    renderCustomList();
  });
  document.getElementById("plotCloseBtn").addEventListener("click", () => plotBackdrop.classList.remove("show"));
  plotBackdrop.addEventListener("click", function(e){ if(e.target === plotBackdrop) plotBackdrop.classList.remove("show"); });

  document.getElementById("plotAddBtn").addEventListener("click", async function(){
    const label = document.getElementById("plotLabel").value.trim();
    const remark = document.getElementById("plotRemark").value.trim();
    const lat = parseFloat(document.getElementById("plotLat").value);
    const lon = parseFloat(document.getElementById("plotLon").value);
    if(!label || isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180){
      plotMsg.textContent = "Enter a label and valid lat (-90 to 90) / lon (-180 to 180)."; plotMsg.className = "modal-msg err";
      return;
    }
    try {
      const res = await fetch("/api/custom-markers", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({label: label, remark: remark, lat: lat, lon: lon})});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      customMarkers = j.markers || [];
      ["plotLabel","plotRemark","plotLat","plotLon"].forEach(id => document.getElementById(id).value = "");
      plotMsg.textContent = "Added."; plotMsg.className = "modal-msg ok";
      renderCustomList();
      if(currentData) render(currentData, isLive, null);
    } catch(e) {
      plotMsg.textContent = "Add failed: " + e.message; plotMsg.className = "modal-msg err";
    }
  });

  // ---------------- boot ----------------
  loadCustomMarkers().then(function(){ loadData(false); });
  // auto-update news & data every 3 minutes, per request
  refreshTimer = setInterval(function(){ loadData(false); }, 3*60*1000);

  // Test hooks (harmless in production) so the DOM regression test can drive
  // the real code paths instead of re-implementing them
  window.__TEST = {render: function(){ if(currentData) render(currentData, isLive, null); },
                   setData: function(d){ currentData = d; isLive = true; },
                   setWindow: function(w){ timeWindow = w; },
                   parseItemDate: parseItemDate, inWindow: inWindow};
})();
