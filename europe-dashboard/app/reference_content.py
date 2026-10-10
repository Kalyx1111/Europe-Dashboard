"""Background reference items for Europe. Real, sourced, dated. Undated or "ongoing" items never appear in
the 72-hour running feed or the 72-hour panel view, because they have no verifiable timestamp.
Items marked "not re-verified in this build" come from public record and should be checked before use.
"""

REFERENCE_ITEMS = [
    {"category": "geo", "label": "Finland joins NATO (4 April 2023)",
     "text": "Finland became NATO's 31st member on 4 April 2023. It applied in May 2022, after Russia's full-scale invasion of Ukraine.",
     "source": "UK House of Commons Library; US Congressional Research Service", "date": "Apr 2023",
     "url": None, "connector": "reference"},
    {"category": "geo", "label": "Sweden joins NATO (7 March 2024)",
     "text": "Sweden became NATO's 32nd member on 7 March 2024. Its accession was delayed by ratification in Turkey and Hungary, which both approved it in early 2024.",
     "source": "UK House of Commons Library; US Congressional Research Service", "date": "Mar 2024",
     "url": None, "connector": "reference"},
    {"category": "scs", "label": "Nord Stream pipeline sabotage (26 September 2022)",
     "text": "Four explosions hit the Nord Stream 1 and 2 pipelines in the Baltic Sea on 26 September 2022, leaving only one of the four pipes intact. Reporting in 2023 linked the sabotage to a possible Ukrainian operation; official attribution is not settled.",
     "source": "ACLED; Swedish and Danish investigations (as reported)", "date": "Sep 2022",
     "url": None, "connector": "reference"},
    {"category": "scs", "label": "Suspicious activity concentrated in the Baltic Sea (ACLED)",
     "text": "ACLED reports a concentration of suspicious events around undersea infrastructure in the Baltic Sea, which it links to the accession of Finland and Sweden to NATO and to rising tension. Attribution in individual cases is difficult.",
     "source": "ACLED analysis", "date": "ongoing (ACLED analysis)",
     "url": None, "connector": "reference"},
    {"category": "milops", "label": "Russia's full-scale invasion of Ukraine (February 2022)",
     "text": "Russia launched its full-scale invasion of Ukraine in February 2022. The invasion is the basis for Finland's and Sweden's applications to NATO and for the wider European security debate.",
     "source": "US Congressional Research Service; UK House of Commons Library (as reported)", "date": "Feb 2022",
     "url": None, "connector": "reference"},
    {"category": "arms", "label": "Zaporizhzhia nuclear plant under Russian control (since March 2022)",
     "text": "IAEA reporting says the Zaporizhzhia plant, Europe's largest nuclear station, has been under Russian control since March 2022. The IAEA has repeatedly warned about its safety.",
     "source": "IAEA reporting (not re-verified in this build)", "date": "Mar 2022",
     "url": None, "connector": "reference"},
    {"category": "wellbeing", "label": "World Happiness Report 2026: European ranks not verified",
     "text": "The 2026 World Happiness Report ranks for Europe's countries were not verified in this build. Check the report directly.",
     "source": "World Happiness Report 2026 (not verified in this build)", "date": "Mar 2026",
     "url": None, "connector": "reference"},
]
