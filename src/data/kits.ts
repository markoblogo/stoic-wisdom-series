export type FreeKit = {
  id: string;
  title: string;
  subtitle: string;
  bullet: string;
  description: string;
  pdfUrl: string;
  teaserUrl: string;
  coverImage: string;
  promoImage: string;
};

export const freeKits: FreeKit[] = [
  {
    id: 'toki-readers-kit',
    title: 'The Toki Pona Reader’s Kit',
    subtitle: 'A Beginner’s Guide Using Philosophical Texts',
    bullet: 'Includes The Golden Verses of Pythagoras (full text)',
    description:
      'A beginner-friendly starter pack for reading toki pona with clear pacing and practical cues.',
    pdfUrl: '/assets/kits/stoicKit.pdf',
    teaserUrl: 'https://youtu.be/6AhXMiVvsXg',
    coverImage: '/assets/kits/stoicCover.png',
    promoImage: '/assets/kits/stoicPromo.jpg',
  },
  {
    id: 'chinese-wisdom-kit',
    title: 'Chinese Wisdom in toki pona',
    subtitle: 'Free Kit / Reader’s Guide',
    bullet: 'Includes Mozi (墨子) — 兼愛 (Universal Love) sample + art plates',
    description:
      'An entry point into Chinese wisdom texts in toki pona with visual plates and reading prompts.',
    pdfUrl: '/assets/kits/chineseKit.pdf',
    teaserUrl: 'https://youtu.be/2eTLmbfBuxI',
    coverImage: '/assets/kits/chineseCover.jpg',
    promoImage: '/assets/kits/chinesePromo.png',
  },
];
