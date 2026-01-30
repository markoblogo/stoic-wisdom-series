import Script from 'next/script';
import { getDictionary } from '@/get-dictionary';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import BookList from '@/components/BookList';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import { books } from '@/data/books';
import { orgJsonLd, seriesJsonLd, websiteJsonLd, jsonLdForBook } from '@/lib/jsonld';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = (['en', 'tp'].includes(lang) ? lang : 'en') as 'en' | 'tp';
  const dict = await getDictionary(validLang);

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [orgJsonLd(), websiteJsonLd(validLang), seriesJsonLd(validLang), ...books.map((b) => jsonLdForBook(validLang, b))],
  };

  return (
    <main className={styles.main}>
      <Script
        id="jsonld-stoic-series"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      <Header lang={validLang} />
      <Hero dict={dict} lang={validLang} />
      <WhySection dict={dict} />
      <BookList dict={dict} />
      <Footer dict={dict} lang={validLang} />
    </main>
  );
}
