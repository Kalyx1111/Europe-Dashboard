"""Routes every headline into one of the 15 dashboard headings (Europe).

Plain ordered keyword rules - readable and editable. Order matters: the most specific headings are tested
first. Short keywords are whole-word matches (padded with spaces), so "eu" does not match "neutral" and
"euro" does not match "europe". Military action words (troops, strikes, front line) are recognised before
sea and border words, so a strike near a port is filed as military. A headline that matches no rule goes to "geo".

Heading keys match the other builds. The "scs" key means the Baltic, Black Sea and strait chokepoints
heading for this region (its title is set in the build script).
"""

HEADINGS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber",
            "darkweb", "econ", "mss", "social", "wellbeing", "hazard"]

RULES = [
    ("darkweb", ["dark web", "darknet", "onion", "ransomware", "leak site", "infostealer", "stealer",
                 "data breach", "data leak", "breached", "threat intel", "threat intelligence", "initial access broker"]),
    ("cyber", ["cyber", "hacker", "hacked", "hacking", "malware", "vulnerabilit", "intrusion", "zero-day",
               " apt ", " apt-", "backdoor", "phishing", "ddos", "cyberattack", "spear-phish", "espionage campaign"]),
    ("hazard", ["earthquake", "flood", "heatwave", "heat wave", "wildfire", "storm", "drought", "landslide", "hail",
                "avalanche", "volcano", "eruption", "tsunami", "tornado", "blizzard"]),
    ("milops", ["troops", "soldiers", "soldier", "front line", "frontline", "offensive", "shelling", "artillery",
                "airstrike", "air strike", "drone strike", "missile strike", "battalion", "brigade", "wagner",
                "invasion", "invaded", "ceasefire", "clash", "garrison", "deployment", "military exercise", " nato exercise",
                "mobilisation", "mobilization", "annex"]),
    ("mss", ["sabotage", "espionage", " spy ", "spying", "arrested", "detained", "sentenced", "crackdown",
             "disinformation", "influence operation", "interference", "police", "extremist", "terror", "terrorist",
             "surveillance", "internal security", "intelligence service"]),
    ("scs", ["baltic sea", "black sea", "north sea", "english channel", "mediterranean", "bosphorus", "bosporus",
             "dardanelles", "gibraltar", "øresund", "oresund", "kerch", "montreux", "undersea", "subsea", "undersea cable",
             "nord stream", "shipping lane", "sea lane", "chokepoint", "port call", "tanker", "bornholm", "suwałki",
             "suwalki", "narva", "kaliningrad", "crimean bridge", "maritime boundary"]),
    ("naval", ["navy", "naval", "warship", "frigate", "destroyer", "submarine", "aircraft carrier", "naval fleet",
               "coast guard", "shipyard", "cruiser", "amphibious", "marine corps", " sub "]),
    ("air", ["air force", "fighter", " jet ", " jets ", "drone", "airspace", "airport", "air base", "airbase",
             "aviation", "aircraft", "helicopter", "flight", "airline", " uav "]),
    ("space", ["satellite", "space", "rocket", "launch", "galileo", "copernicus", "esa ", "orbit", "spacecraft"]),
    ("arms", ["nuclear", "missile", "warhead", "reactor", "uranium", "enrichment", "iaea", "npt", "ballistic",
              "hypersonic", "zaporizhzhia nuclear", "chornobyl", "chernobyl"]),
    ("tech", ["artificial intelligence", " ai act", " ai ", "chips", "semiconductor", "export control", "huawei",
              "digital markets act", "digital services act", "gdpr", "data protection", "5g", "tech "]),
    ("econ", [" euro ", "ecb", "inflation", "trade", "tariff", "sanction", "energy price", "gas price",
              " gas ", "budget", "debt", "recession", "gdp", "growth", " export ", " exports ", " import ", " imports ",
              "investment", "economy", "economic", "bank", "deficit"]),
    ("social", ["protest", "far-right", "far right", "migrant", "migration", "refugee", "asylum", "social media",
                "public opinion", "poll", "viral", "students", "youth", "strike action", "trade union"]),
    ("wellbeing", ["happiness", "wellbeing", "well-being", "life expectancy", "poverty", "human development index"]),
]


def classify(text: str) -> str:
    t = " " + (text or "").lower() + " "
    for heading, words in RULES:
        if any(w in t for w in words):
            return heading
    return "geo"
