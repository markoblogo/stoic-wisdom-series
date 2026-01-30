import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../globals.css';
import { getDictionary } from '@/get-dictionary';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'en' | 'tp');

    return {
        title: dict.meta.title,
        description: dict.meta.description,
        alternates: {
            canonical: `https://stoic.abvx.xyz/${lang}`,
            languages: {
                'en': 'https://stoic.abvx.xyz/en',
                'tp': 'https://stoic.abvx.xyz/tp',
            } as any,
        },
        openGraph: {
            title: dict.meta.title,
            description: dict.meta.description,
            url: `https://stoic.abvx.xyz/${lang}`,
            siteName: 'Stoic Wisdom Series',
            locale: lang === 'tp' ? 'en_US' : 'en_US',
            type: 'website',
            images: [
                {
                    url: 'https://stoic.abvx.xyz/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Stoic Wisdom Series — toki pona editions',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: dict.meta.title,
            description: dict.meta.description,
            images: ['https://stoic.abvx.xyz/twitter-card.jpg'],
        },
        robots: {
            index: true,
            follow: true,
        }
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    return (
        <html lang={lang} className={`${inter.variable} ${playfair.variable}`}>
            <body>{children}</body>
        </html>
    );
}
