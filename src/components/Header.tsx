import LanguageSwitch from './LanguageSwitch';
import styles from './Header.module.css';

export default function Header({ lang }: { lang: 'en' | 'tp' }) {
  const stoicHref = `/${lang}`;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>&gt;</span>
          <a href={stoicHref} className={styles.brandTitle} style={{ textDecoration: 'none' }}>
            Stoic Wisdom Series
          </a>
        </div>

        <nav className={styles.nav} aria-label="Site navigation">
          <a className={styles.navLink} href="https://toki.abvx.xyz/">
            Translator
          </a>
          <a className={styles.navLink} href="https://toki.abvx.xyz/learn">
            Learn
          </a>
          <a className={styles.navLink} href="https://toki.abvx.xyz/kit">
            Kit
          </a>
          <a className={styles.navLink} href={`${stoicHref}#more-books`}>
            More books
          </a>
          <a className={`${styles.navLink} ${styles.navLinkActive}`} href={stoicHref}>
            Toki Stoic
          </a>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitch currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
