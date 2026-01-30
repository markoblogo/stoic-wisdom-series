export default async function Head({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const safeLang = lang === 'tp' ? 'tp' : 'en';

  // Lighthouse is picky about hreflang. We emit explicit tags.
  // toki pona language code: "tok" (BCP-47 primary language subtag)
  const alternates = [
    { hrefLang: 'en', href: 'https://stoic.abvx.xyz/en' },
    { hrefLang: 'tok', href: 'https://stoic.abvx.xyz/tp' },
    { hrefLang: 'x-default', href: 'https://stoic.abvx.xyz/en' },
  ];

  return (
    <>
      {alternates.map((a) => (
        <link key={a.hrefLang} rel="alternate" hrefLang={a.hrefLang} href={a.href} />
      ))}
      {/* Ensure correct html lang is represented in head too (some crawlers care) */}
      <meta httpEquiv="content-language" content={safeLang === 'tp' ? 'tok' : 'en'} />
    </>
  );
}
