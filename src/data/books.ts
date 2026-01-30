export interface LocalizedString {
    en: string;
    tp: string;
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
        teaserVideoId: "ILN2qILESH0",
        shortDescription: {
            en: "A minimalist Stoic classic, reimagined through toki pona.",
            tp: "lipu ni li lipu suli pi nasin stoic."
        },
        longDescription: {
            en: "What happens when ancient Stoic wisdom meets the world’s simplest language? This edition invites readers to rediscover Marcus Aurelius through the lens of Toki Pona — built on simplicity, clarity, and harmony. Each passage is carefully rendered in Toki Pona and mirrored in sitelen pona. Includes the full translation, an introduction, and a glossary/reading guide.",
            tp: "toki ona li kama lon toki pona, li lon sitelen Lasina en sitelen pona. sina ken lukin e toki lili lon tenpo suno ale, la pilin en lawa li kama pona."
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
