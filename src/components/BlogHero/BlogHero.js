import React from 'react';
import { format } from 'date-fns';
import clsx from 'clsx';

import styles from './BlogHero.module.css';
import Link from "next/link";

function BlogHero({
  title,
  publishedOn,
  className,
    tags,
  ...delegated
}) {
  const isValidDate = (date) => {
    return !isNaN(new Date(date).getTime());
  };

  const humanizedDate = isValidDate(publishedOn)
      ? format(new Date(publishedOn), 'MMMM do, yyyy')
      : 'Unknown date';

  console.log(humanizedDate);
  // const humanizedDate = format(
  //   new Date(publishedOn),
  //   'MMMM do, yyyy'
  // );

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <div className={styles.content}>
      <Link  href="/">&lt; Back</Link>
        <h1>{title}</h1>
        <p>
          Published on{' '}
          <time dateTime={publishedOn}>
            {humanizedDate}
          </time>
        </p>
        <div className={styles.tags}>
        {tags?.map((tag) => (<span>{tag}</span>))}
        </div>
      </div>
    </header>
  );
}

export default BlogHero;
