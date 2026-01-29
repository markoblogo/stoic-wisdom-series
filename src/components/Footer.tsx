'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

function TranslatorBanner() {
  return (
    <a
      href="https://toki.abvx.xyz/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-[#E5E7EB] bg-white px-6 py-5 shadow-sm transition hover:border-[#D1D5DB] hover:shadow"
    >
      <div className="flex items-start gap-3">
        <span className="text-[#22C55E] text-2xl font-bold leading-none">&gt;</span>
        <div>
          <div className="text-lg font-semibold leading-tight text-[#111827]">Toki Pona Translator</div>
          <div className="mt-1 text-sm leading-relaxed text-[#6B7280]">
            Type in any language. Get Toki Pona in Latin, sitelen pona, or emoji.
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Footer({ dict, lang }: { dict: any, lang: 'en' | 'tp' }) {
  const socialMedium = 'https://abvcreative.medium.com/';
  const socialSubstack = 'https://abvx.substack.com/';
  const mailto = 'mailto:a.biletskyi@gmail.com?subject=Stoic%20Wisdom%20Series';
  const emailDisplay = 'a.biletskyi@gmail.com';

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.contactRow}>
              <h4 className={styles.contactLabel}>{dict?.contact?.text ?? 'Contact'}</h4>
              <a href={mailto} className={styles.mailLink}>
                {emailDisplay}
              </a>

              <div className={styles.socials}>
                <a href={socialMedium} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  {dict?.contact?.social_medium ?? 'Medium'}
                </a>
                <a href={socialSubstack} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  {dict?.contact?.social_substack ?? 'Substack'}
                </a>
              </div>
            </div>

            <div className={styles.legalRow}>
              <a
                href="https://abvx.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.copyright}
              >
                {dict?.footer?.copyright ?? `© ${new Date().getFullYear()} ABVX.xyz`}
              </a>
              <div className={styles.legalLinks}>
                <Link href={`/${lang}/legal`} className={styles.legalLink}>
                  {dict?.footer?.legal_mentions ?? 'Legal'}
                </Link>
                <Link href={`/${lang}/privacy`} className={styles.legalLink}>
                  {dict?.footer?.privacy_policy ?? 'Privacy'}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <TranslatorBanner />
          </div>
        </div>
      </div>
    </footer>
  );
}
