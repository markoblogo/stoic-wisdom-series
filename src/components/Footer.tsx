'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

type BannerProps = {
  href: string;
  title: string;
  subtitle: string;
  iconText?: string;
  badgeText?: string;
};

function Banner({ href, title, subtitle, iconText = '>', badgeText }: BannerProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.bannerCard}>
      <div className={styles.bannerHeader}>
        <span className={styles.bannerIcon}>{iconText}</span>
        {badgeText && <span className={styles.bannerBadge}>{badgeText}</span>}
      </div>
      <div className={styles.bannerTitle}>{title}</div>
      <div className={styles.bannerSubtitle}>{subtitle}</div>
    </a>
  );
}

export default function Footer({ dict, lang }: { dict: any; lang: 'en' | 'tp' }) {
  const socialMedium = 'https://abvcreative.medium.com/';
  const socialSubstack = 'https://abvx.substack.com/';
  const socialGitHub = 'https://github.com/markoblogo';
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
                <a href={socialGitHub} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub
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
            <div className={styles.banners}>
              <Banner
                href="https://toki.abvx.xyz/"
                title="Toki Pona Translator"
                subtitle="Type in any language. Get Toki Pona in Latin, sitelen pona, or emoji."
              />
              <Banner
                href="https://toki.abvx.xyz/kit"
                title="The Toki Pona Reader’s Kit"
                subtitle="A free beginner-friendly guide — includes The Golden Verses of Pythagoras (full text)."
                badgeText="FREE"
              />
              <Banner
                href="https://ukrmodernism.abvx.xyz/fr"
                title="Ukrainian Modernism"
                subtitle="A collection of Ukrainian modernist novels — translated into French."
                iconText="✶"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
