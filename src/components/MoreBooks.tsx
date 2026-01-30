'use client';

type MoreBook = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  promoSrc: string;
  kindleUrl: string;
  paperbackUrl: string;
  teaserUrl: string;
};

const BOOKS: MoreBook[] = [
  {
    id: 'dao',
    title: 'Dao De Jing (Tao Te Ching)',
    subtitle: 'Chinese text + toki pona in sitelen pona',
    description:
      'A visual bilingual edition: classical Chinese on the left, toki pona in sitelen pona on the right — chapter-by-chapter plates with a compact reading guide.',
    promoSrc: '/assets/books/other-books/dao.jpg',
    kindleUrl: 'https://www.amazon.com/dp/B0G4XNRS4W',
    paperbackUrl: 'https://www.amazon.com/dp/B0G5MCFN2T',
    teaserUrl: 'https://youtu.be/oWA-_FatU3E',
  },
  {
    id: 'christmas',
    title: 'A Christmas Carol — in Toki Pona',
    subtitle: 'Bilingual edition with sitelen pona',
    description:
      'Dickens retold through radical simplicity — toki pona text paired with sitelen pona and a calm, book-as-art layout.',
    promoSrc: '/assets/books/other-books/christmas.jpg',
    kindleUrl: 'https://www.amazon.com/dp/B0G1N2YHD8',
    paperbackUrl: 'https://www.amazon.com/dp/B0G1XVNPSL',
    teaserUrl: 'https://youtu.be/ammjR4v58CM',
  },
  {
    id: 'machine',
    title: 'Toki Pona and the Machine Mind',
    subtitle: 'Designing cleaner prompts & smaller models',
    description:
      'A practical field guide: prompt compression, constrained DSLs, and predictable AI interfaces inspired by toki pona and its visual scripts.',
    promoSrc: '/assets/books/other-books/machine.jpg',
    kindleUrl: 'https://www.amazon.com/dp/B0G44JSMR2',
    paperbackUrl: 'https://www.amazon.com/dp/B0G5MQKZTX',
    teaserUrl: 'https://youtu.be/0juEOOI1iEM',
  },
];

export default function MoreBooks({ dict }: { dict: any }) {
  return (
    <section style={{ marginTop: '36px' }}>
      <div className="container">
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: 8 }}>
          {dict?.moreBooks?.title ?? 'More books about toki pona'}
        </h2>
        <p style={{ color: 'rgba(0,0,0,0.65)', marginTop: 0, marginBottom: 18 }}>
          {dict?.moreBooks?.subtitle ?? 'Not part of the Stoic series — other editions by the author.'}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 14,
          }}
        >
          {BOOKS.map((b) => (
            <div
              key={b.id}
              style={{
                borderRadius: 18,
                border: '1px solid rgba(0,0,0,0.10)',
                background: 'white',
                overflow: 'hidden',
                boxShadow: '0 18px 60px rgba(15, 23, 42, 0.08)',
                transition: 'transform 180ms ease, box-shadow 180ms ease',
              }}
              className="more-book-card"
            >
              <div style={{ padding: 18 }}>
                <div style={{ fontSize: 11, letterSpacing: 0.8, fontWeight: 700, color: '#22C55E' }}>
                  BOOK
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>{b.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.60)', marginTop: 6 }}>{b.subtitle}</div>
                <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.78)', marginTop: 10, lineHeight: 1.5 }}>
                  {b.description}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 14 }}>
                  <a href={b.kindleUrl} target="_blank" rel="noopener noreferrer" style={pill(false)}>
                    Kindle
                  </a>
                  <a href={b.paperbackUrl} target="_blank" rel="noopener noreferrer" style={pill(false)}>
                    Paperback
                  </a>
                  <a href={b.teaserUrl} target="_blank" rel="noopener noreferrer" style={pill(true)}>
                    Teaser
                  </a>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <img src={b.promoSrc} alt="" loading="lazy" style={{ width: '100%', height: 150, objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 880px) {
            .more-book-card {
              transform: none !important;
            }
            section > .container > div {
              grid-template-columns: 1fr !important;
            }
          }
          .more-book-card:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 28px 90px rgba(15, 23, 42, 0.14);
            position: relative;
            z-index: 5;
          }
        `}</style>
      </div>
    </section>
  );
}

function pill(active: boolean): React.CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 12px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    textDecoration: 'none',
    border: active ? '1px solid rgba(34,197,94,0.8)' : '1px solid rgba(0,0,0,0.16)',
    background: active ? 'rgba(34,197,94,0.10)' : 'white',
    color: 'rgba(0,0,0,0.78)',
  };
}
