export interface LocalizedString {
    en: string;
    tp: string;
}

export interface BookIdentifiers {
    asinKindle?: string;
    asinPrint?: string;
    isbn13Print?: string;
}

export interface Book {
    id: string; // The slug (folder name)
    type: 'commercial' | 'gift';
    title: LocalizedString;
    author: LocalizedString;
    coverImage: string;
    promoImage: string;
    amazonKindleUrl?: string;
    amazonPrintUrl?: string;
    downloadPdfUrl?: string;
    downloadEpubUrl?: string;
    teaserVideoId?: string;
    shortDescription: LocalizedString;
    longDescription: LocalizedString;

    identifiers?: BookIdentifiers;
}

export const books: Book[] = [
    {
        id: "marcus-meditations",
        type: 'commercial',
        title: {
            en: "Meditations of Marcus Aurelius — in Toki Pona",
            tp: "lipu “Meditations” pi jan Maku — lon toki pona"
        },
        author: {
            en: "Marcus Aurelius",
            tp: "jan Makusi Ojeliju"
        },
        coverImage: "/assets/books/marcus-meditations/cover.webp",
        promoImage: "/assets/books/marcus-meditations/promo.webp",
        amazonKindleUrl: "https://www.amazon.com/dp/B0FV3F1RC5",
        amazonPrintUrl: "https://www.amazon.com/dp/B0FVLPD69K",
        identifiers: {
            asinKindle: 'B0FV3F1RC5',
            asinPrint: 'B0FVLPD69K',
            isbn13Print: '979-8268811124',
        },
        teaserVideoId: "ILN2qILESH0",
        shortDescription: {
            en: "A minimalist Stoic classic, reimagined in the world’s simplest language.",
            tp: "lipu ni li lipu suli pi nasin stoic."
        },
        longDescription: {
            en: "What happens when ancient Stoic wisdom meets the world’s simplest language? “Meditations of Marcus Aurelius — in Toki Pona” invites readers to rediscover the timeless reflections of the Roman emperor through the lens of Toki Pona — a constructed language built on simplicity, clarity, and harmony. Each passage is carefully rendered in Toki Pona and mirrored in sitelen pona. This edition includes the full translation, an introduction, and a glossary/reading guide.",
            tp: "toki ona li kama lon toki pona, li lon sitelen Lasina en sitelen pona. sina ken lukin e toki lili lon tenpo suno ale, la pilin en lawa li kama pona."
        }
    },
    {
        id: "epictetus-enchiridion",
        type: 'commercial',
        title: {
            en: "Epictetus: The Enchiridion in toki pona",
            tp: "jan Epiteto: lipu Enkilijon lon toki pona"
        },
        author: {
            en: "Epictetus",
            tp: "jan Epiteto"
        },
        coverImage: "/assets/books/epictetus-enchiridion/cover.webp",
        promoImage: "/assets/books/epictetus-enchiridion/promo.webp",
        amazonKindleUrl: "https://www.amazon.com/dp/B0GKWR5NL1",
        amazonPrintUrl: "https://www.amazon.com/dp/B0GKXXJGZV",
        teaserVideoId: "DNgkm9tf6Cg",
        shortDescription: {
            en: "A compact Stoic manual for clear choices under pressure: learn what is in your control, what is not, and how to act without noise.",
            tp: "lipu Enkilijon li lipu lili pi sona Sito. ona li pana e nasin pi lawa insa: ijo li lon pali mi, ijo li lon pali ala mi. ona li pona tawa tenpo pi wile mute en tenpo pi pilin pakala."
        },
        longDescription: {
            en: "The Enchiridion is a practical handbook: short chapters meant to be revisited, especially when life gets loud. This edition reimagines Epictetus in toki pona for a calmer, more inspectable kind of reading. What you get in this volume: Public-domain English reference text (Elizabeth Carter, 1758) for comparison. Two-layer toki pona reading format: Latin script + the same line repeated for sitelen pona. A reading method designed for slow progress: small daily units, repetition, and “What is the instruction?” as the main question. Links to the free beginner kit and the series page. Created & curated by Biletskyi-Volokh Anton.",
            tp: "lipu Enkilijon li lipu pi nasin pali. lipu lili mute li lon. sina ken lukin e wan, sina awen, sina kepeken sona ona lon tenpo suno. lipu ni li ante e toki pi jan Epiteto kepeken toki pona, tawa ni: lukin li nasa ala, lawa li ken awen. ijo lon lipu ni: toki Inli pi lipu pi jan Elizabeth Carter tawa lukin ante. toki pona lon sitelen Lasina, en toki sama lon sitelen pona. nasin pi lukin lili lon tenpo mute: o lukin e lipu lili, o awen, o pana e sona ona tawa tenpo suno. nasin pona: “toki pona pi lipu ni li wile ni: sina ken lukin e pali wile.” sina ken kama jo e lipu pona pi kama sona, e lipu pi kulupu lipu, lon nimi lon lipu."
        }
    },
    {
        id: "readers-kit",
        type: 'gift',
        title: {
            en: "The Toki Pona Reader’s Kit (Free PDF)",
            tp: "ilo lipu pi toki pona (lipu pi mani ala)"
        },
        author: {
            en: "ABV & Pythagoras",
            tp: "ABV en jan Pitakola"
        },
        coverImage: "/assets/books/readers-kit/cover.webp",
        promoImage: "/assets/books/readers-kit/promo.webp",
        downloadPdfUrl: "https://toki.abvx.xyz/kit.pdf",
        teaserVideoId: "F7fSBElppzI",
        shortDescription: {
            en: "A beginner-friendly entry point into reading toki pona with philosophical texts — plus the full practice text: The Golden Verses of Pythagoras.",
            tp: "lipu ni li pona tawa jan sin."
        },
        longDescription: {
            en: "Download it, learn the cues, and use it as your fast start before diving into the series.",
            tp: "ona li pana e nasin pi lukin lipu lon toki pona, li jo kin e lipu ale pi “The Golden Verses of Pythagoras”. o kama jo e lipu, o kama sona lili, la sina ken tawa lipu pi kulupu ni."
        }
    }
];
