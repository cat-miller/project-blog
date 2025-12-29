import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import Card from '@/components/Card';

import styles from './BlogSummaryCard.module.css';
import {Image} from "next/dist/client/image-component";

function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
    url,
    width,
    height,
}) {
  const href = `/${slug}`;
  const humanizedDate = format(
    new Date(publishedOn),
    'MMMM do, yyyy'
  );

  return (
    <Card className={styles.wrapper}>
        <div className={styles.content}>
            <Image priority src={url} alt={title} width={width/2} height={height/2} />
        <div className={styles.textWrapper}>
            <Link href={href} className={styles.title}>
                {title}
            </Link>
            <time dateTime={publishedOn}>{humanizedDate}</time>
            <p>
                {abstract}
            </p>
            <Link
                href={href}
                className={styles.continueReadingLink}
            >
                Continue reading{' '}
                <span className={styles.arrow}>→</span>
            </Link>
        </div>
        </div>
    </Card>
  );
}

export default BlogSummaryCard;
