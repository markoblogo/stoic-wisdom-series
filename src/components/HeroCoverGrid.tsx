'use client';

import Image from 'next/image';
import { Book } from '@/data/books';
import styles from './HeroCoverGrid.module.css';
import GiftBadge from './GiftBadge';
import { useState } from 'react';

interface HeroCoverGridProps {
    books: Book[];
    onSelect: (book: Book) => void;
    selectedBookId: string | null;
    dict: any;
    lang: string;
}

// Staircase configuration for Desktop
// Tuned for up to 5 books.
const STACK_TRANSFORMS = [
    { x: 0, y: 140, r: -3, z: 10 },     // Front
    { x: 70, y: 60, r: 2, z: 9 },       // Back-right
    { x: 140, y: -10, r: 6, z: 8 },     // Far-right
    { x: -70, y: 60, r: -6, z: 7 },     // Back-left
    { x: -140, y: -10, r: -10, z: 6 },  // Far-left
];

export default function HeroCoverGrid({ books, onSelect, lang }: HeroCoverGridProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleBookClick = (book: Book) => {
        onSelect(book);
    };

    return (
        <div className={styles.stackContainer}>
            <div className={styles.scroller}>
                {books.map((book, index) => {
                    const isGift = book.type === 'gift';
                    const badgeLabel = 'FREE';
                    const transform = STACK_TRANSFORMS[index] || STACK_TRANSFORMS[0];
                    const isHovered = hoveredIndex === index;

                    return (
                        <div
                            key={book.id}
                            className={styles.cardWrapper}
                            onClick={() => handleBookClick(book)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                '--x': `${transform.x}px`,
                                '--y': `${transform.y}px`,
                                '--r': `${transform.r}deg`,
                                '--z': isHovered ? 50 : transform.z,
                            } as any}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleBookClick(book);
                                }
                            }}
                        >
                            <div className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={book.coverImage}
                                        alt={book.title[lang === 'tp' ? 'tp' : 'en'] || book.title.en}
                                        fill
                                        className={styles.coverImg}
                                        sizes="(max-width: 768px) 240px, 300px"
                                        priority={index < 3}
                                    />
                                </div>
                                {isGift && (
                                    <GiftBadge label={badgeLabel} />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
