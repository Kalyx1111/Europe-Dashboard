"""RSS aggregator - free, no key. English-language feeds only.

Feed URLs are either confirmed from a publisher's own feed (SpaceNews returned
live items during verification), or listed in a feed directory (FeedSpot)
pending the connector's own live check. Each feed reports its own status and
fails independently. World-wide feeds keep only region-relevant headlines.
"""
from __future__ import annotations
import re
from .base import Item, ConnectorResult
from ..classify import classify

NAME = "rss"

FEEDS = [
    # Public broadcasters and general news (addresses printed by the Feeder list and curated country lists)
    {"url": "https://rss.dw.com/rdf/rss-en-all", "source": "Deutsche Welle (English)"},
    {"url": "https://www.france24.com/en/rss", "source": "France 24 (English)"},
    {"url": "https://www.euronews.com/rss", "source": "Euronews"},
    {"url": "https://feeds.bbci.co.uk/news/rss.xml", "source": "BBC News - Home"},
    {"url": "https://feeds.bbci.co.uk/news/uk/rss.xml", "source": "BBC News - UK"},
    {"url": "https://feeds.bbci.co.uk/news/world/rss.xml", "source": "BBC News - World"},
    {"url": "https://www.theguardian.com/world/rss", "source": "The Guardian - World"},
    # Western Balkans and southeast Europe (publisher's own RSS list)
    {"url": "https://balkaninsight.com/feed/", "source": "Balkan Insight"},
    # Defence, naval and space (addresses printed by FeedSpot and Shephard listings)
    {"url": "https://www.navalnews.com/feed/", "source": "Naval News"},
    {"url": "https://shephardmedia.com/news/feed/", "source": "Shephard Media"},
    {"url": "https://www.defensenews.com/arc/outboundfeeds/rss/category/space/?outputType=xml", "source": "Defense News - Space"},
    {"url": "https://breakingdefense.com/feed", "source": "Breaking Defense"},
    {"url": "https://spacenews.com/feed/", "source": "SpaceNews"},
    {"url": "https://www.space.com/feeds.xml", "source": "Space.com"},
    {"url": "https://therecord.media/feed", "source": "The Record"},
]

WORLD_WIDE_SOURCES = ("BBC News - Home", "BBC News - UK", "BBC News - World", "The Guardian - World", "France 24 (English)",
                      "Naval News", "Shephard Media", "Defense News - Space", "Breaking Defense", "SpaceNews", "Space.com",
                      "The Record")
REGION_TERMS = ["europe", "european", "eu", "nato", "brussels", "strasbourg", "frankfurt", "ecb", "ukraine", "ukrainian",
                "kyiv", "kiev", "russia", "russian", "moscow", "belarus", "minsk", "moldova", "transnistria", "chisinau",
                "poland", "polish", "warsaw", "lithuania", "lithuanian", "vilnius", "latvia", "latvian", "riga", "estonia",
                "estonian", "tallinn", "narva", "finland", "finnish", "helsinki", "sweden", "swedish", "stockholm", "norway",
                "norwegian", "oslo", "denmark", "danish", "copenhagen", "bornholm", "øresund", "oresund", "germany", "german",
                "berlin", "france", "french", "paris", "italy", "italian", "rome", "spain", "spanish", "madrid", "portugal",
                "lisbon", "britain", "british", "uk", "london", "ireland", "irish", "dublin", "netherlands", "dutch",
                "amsterdam", "belgium", "belgian", "luxembourg", "austria", "austrian", "vienna", "switzerland", "swiss",
                "bern", "czech", "czechia", "prague", "slovakia", "slovak", "bratislava", "hungary", "hungarian", "budapest",
                "romania", "romanian", "bucharest", "bulgaria", "bulgarian", "sofia", "greece", "greek", "athens", "cyprus",
                "nicosia", "turkey", "turkish", "ankara", "istanbul", "bosphorus", "dardanelles", "malta", "maltese", "serbia",
                "serbian", "belgrade", "kosovo", "pristina", "bosnia", "sarajevo", "albania", "albanian", "tirana", "montenegro",
                "croatia", "croatian", "zagreb", "slovenia", "ljubljana", "macedonia", "skopje", "balkans", "balkan",
                "kaliningrad", "crimea", "crimean", "sevastopol", "donbas", "donbass", "donetsk", "zaporizhzhia", "odesa",
                "odessa", "kerch", "suwałki", "suwalki", "gibraltar", "baltic", "black sea", "north sea", "english channel",
                "mediterranean", "nord stream", "wagner", "iaea", "chornobyl", "chernobyl"]


def configured() -> bool:
    return True


def _looks_english(text: str) -> bool:
    if not text:
        return False
    latin = sum(1 for c in text if c.isascii() and c.isalpha())
    letters = sum(1 for c in text if c.isalpha())
    if letters == 0:
        return True
    return (latin / letters) > 0.6


def _relevant(title: str, source: str) -> bool:
    if not source.startswith(WORLD_WIDE_SOURCES):
        return True
    t = title.lower()
    return any(re.search(r'\b' + re.escape(term) + r'\b', t) for term in REGION_TERMS)


def fetch(per_feed_limit: int = 15) -> ConnectorResult:
    from .. import safe_http
    import feedparser
    all_items, errors, ok_feeds = [], [], 0
    for feed in FEEDS:
        try:
            r = safe_http.safe_get(feed["url"])
            if r.status_code != 200:
                errors.append(f"{feed['source']}: HTTP {r.status_code}")
                continue
            parsed = feedparser.parse(r.content)
            if parsed.bozo and not parsed.entries:
                errors.append(f"{feed['source']}: not a readable feed")
                continue
            ok_feeds += 1
            count = 0
            for entry in parsed.entries:
                title = getattr(entry, "title", "").strip()
                if not title or not _looks_english(title) or not _relevant(title, feed["source"]):
                    continue
                all_items.append(Item(
                    category=classify(title), label=title[:90] if len(title) > 90 else title,
                    text=title, source=feed["source"],
                    date=getattr(entry, "published", "") or getattr(entry, "updated", ""),
                    url=getattr(entry, "link", None), connector=NAME,
                ).to_dict())
                count += 1
                if count >= per_feed_limit:
                    break
        except safe_http.FetchError as e:
            errors.append(f"{feed['source']}: blocked ({e})")
        except Exception as e:
            errors.append(f"{feed['source']}: {type(e).__name__}")
    if not all_items and errors:
        return ConnectorResult(NAME, True, False, "; ".join(errors)[:300])
    msg = f"{len(all_items)} items from {ok_feeds} of {len(FEEDS)} feeds"
    if errors:
        msg += f" ({len(errors)} failed: {'; '.join(errors)[:200]})"
    return ConnectorResult(NAME, True, True, msg, all_items)
