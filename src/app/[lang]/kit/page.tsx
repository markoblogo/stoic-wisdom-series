import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { getDictionary } from '@/get-dictionary';
import { freeKits } from '@/data/kits';
import styles from './page.module.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = lang === 'tp' ? 'tp' : 'en';
  const base = `https://toki.abvx.xyz/${safeLang}/kit`;

  return {
    title: 'The Toki Pona Reader’s Kits',
    description:
      'Free beginner-friendly guides for toki pona reading: download PDF kits and watch teaser videos.',
    alternates: {
      canonical: base,
      languages: {
        en: 'https://toki.abvx.xyz/en/kit',
      },
    },
    openGraph: {
      title: 'The Toki Pona Reader’s Kits',
      description:
        'Free beginner-friendly guides for toki pona reading: download PDF kits and watch teaser videos.',
      url: base,
      type: 'website',
    },
  };
}

const features = [
  {
    title: 'Learn by reading real texts',
    text: 'Each kit starts from real source material with a clear beginner path instead of isolated drills.',
  },
  {
    title: 'Two writing systems, one text',
    text: 'Read in Latin toki pona and duplicate lines for sitelen-ready practice in the same flow.',
  },
  {
    title: 'Consistent layout across series',
    text: 'The same page rhythm, cues, and structure make it easy to continue from kit to full books.',
  },
];

const kitFaq = {
  faq: {
    title: 'FAQ',
    subtitle: 'Quick answers about the kits and what comes next.',
    items: [
      {
        q: 'What’s inside each kit?',
        a: 'A beginner guide, reading cues, sample pages, and direct links to the related series.',
      },
      {
        q: 'Do I need to know toki pona?',
        a: 'No. The kits are built for beginners and guide you through the reading flow step by step.',
      },
      {
        q: 'Why duplicate toki pona lines?',
        a: 'Repetition helps pattern recognition and makes slow reading easier to retain.',
      },
      {
        q: 'Is it really free?',
        a: 'Yes. The kits are free for personal use (non-commercial).',
      },
      {
        q: 'Can I print it?',
        a: 'Yes. The PDFs are print-friendly and designed for both screen and paper reading.',
      },
      {
        q: 'Where do the Chinese/English sources come from?',
        a: 'The kits use public-domain source material and include notes for context.',
      },
      {
        q: 'Where can I get the full series?',
        a: 'Use the bridge links below to open the Stoic and Chinese series sites.',
      },
      {
        q: 'Will there be EPUB/Kindle versions?',
        a: 'Yes, when each track is ready. New formats are announced on the linked series pages.',
      },
    ],
  },
};

export default async function KitHubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang = (lang === 'tp' || lang === 'en') ? (lang as 'en' | 'tp') : 'en';
  const dict = await getDictionary(safeLang);

  return (
    <main className={styles.main}>
      <Header lang={safeLang} />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <h1 className={styles.heroTitle}>The Toki Pona Reader’s Kits</h1>
            <p className={styles.heroSubtitle}>
              Free beginner-friendly guides; download PDF and watch teaser video.
            </p>
          </div>

          <div className={styles.heroVisuals}>
            {freeKits.map((kit) => (
              <div key={kit.id} className={styles.heroCover}>
                <Image
                  src={kit.coverImage}
                  alt={kit.title}
                  fill
                  className={styles.coverImg}
                  sizes="(max-width: 600px) 100vw, 40vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why these kits?</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Free books</h2>
          <p className={styles.sectionLead}>Two free kits available now.</p>

          <div className={styles.kitsGrid}>
            {freeKits.map((kit) => (
              <article key={kit.id} className={styles.kitCard}>
                <div className={styles.kitInner}>
                  <div className={styles.kitMedia}>
                    <Image
                      src={kit.promoImage}
                      alt={`${kit.title} promo`}
                      fill
                      className={styles.coverImg}
                      sizes="(max-width: 900px) 100vw, 45vw"
                    />
                  </div>

                  <div>
                    <h3 className={styles.kitTitle}>{kit.title}</h3>
                    <p className={styles.kitSubtitle}>{kit.subtitle}</p>
                    <p className={styles.kitDesc}>{kit.description}</p>
                    <ul className={styles.kitBullets}>
                      <li>{kit.bullet}</li>
                    </ul>

                    <div className={styles.kitActions}>
                      <a href={kit.pdfUrl} className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                        Download PDF
                      </a>
                      <a href={kit.teaserUrl} className="btn" target="_blank" rel="noopener noreferrer">
                        Watch teaser
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.licenseLine}>Free for personal use (non-commercial).</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>More after the kit?</h2>
          <div className={styles.bridgeGrid}>
            <a
              href="https://stoic.abvx.xyz/"
              className={styles.bridgeCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.bridgeLabel}>Stoic series</span>
              <span>Open ↗</span>
            </a>
            <a
              href="https://dao-toki.abvx.xyz/"
              className={styles.bridgeCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.bridgeLabel}>Chinese series</span>
              <span>Open ↗</span>
            </a>
          </div>
        </div>
      </section>

      <FAQ dict={kitFaq} />
      <Footer dict={dict} lang={safeLang} />
    </main>
  );
}
