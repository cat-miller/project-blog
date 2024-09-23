import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';
import {getBlogPostList} from "@/helpers/file-helpers";

async function Home() {
    const blogPosts = await getBlogPostList()

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.mainHeading}>
                Latest Content:
            </h1>

            {blogPosts?.map(({slug, title, abstract, publishedOn}) => (
                <BlogSummaryCard
                    slug={slug}
                    title={title}
                    abstract={abstract}
                    publishedOn={publishedOn}
                    key={slug}
                />)
            )}
        </div>
    );
}

export default Home;
