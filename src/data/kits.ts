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
    pdfUrl: 'https://toki.abvx.xyz/kit.pdf',
    teaserUrl: 'https://youtu.be/6AhXMiVvsXg',
    coverImage: '/assets/books/readers-kit/cover.webp',
    promoImage: '/assets/books/readers-kit/promo.webp',
  },
  {
    id: 'chinese-wisdom-kit',
    title: 'Chinese Wisdom in toki pona',
    subtitle: 'Free Kit / Reader’s Guide',
    bullet: 'Includes Mozi (墨子) — 兼愛 (Universal Love) sample + art plates',
    description:
      'An entry point into Chinese wisdom texts in toki pona with visual plates and reading prompts.',
    pdfUrl: '/assets/kits/chineseKit.pdf',
    teaserUrl: 'https://youtu.be/BOVyG1jP580',
    coverImage: '/assets/kits/chineseCover.svg',
    promoImage: '/assets/kits/chinesePromo.svg',
  },
];
