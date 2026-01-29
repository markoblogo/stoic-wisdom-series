'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

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

          <div className={styles.rightCol} />
        </div>
      </div>
    </footer>
  );
}
