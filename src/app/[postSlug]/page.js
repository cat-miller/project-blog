import React from 'react';
import {BLOG_TITLE} from "@/constants";
import BlogHero from '@/components/BlogHero';
import { MDXRemote } from 'next-mdx-remote/rsc'
import styles from './postSlug.module.css';
import {loadBlogPost} from "@/helpers/file-helpers";
import COMPONENT_MAP from "@/helpers/mdx-components";
import Link from "next/link";
import {Image} from "next/dist/client/image-component";




export async function generateMetadata({params}){
    const {frontmatter} = await loadBlogPost(params.postSlug);
    return {
        title: `${frontmatter.title}  * ${BLOG_TITLE}`,
        description: frontmatter.abstract,
    }
}
async function BlogPost({params}) {
    const {frontmatter, content} = await loadBlogPost(params.postSlug);

    return (
        <article className={styles.wrapper}>
            <BlogHero
                title={frontmatter.title}
                publishedOn={frontmatter.publishedOn}
                tags={frontmatter?.tags?.split(',')}
            />
            <div className={styles.page}>
                <div className={styles.content}>
                <Image src={'/strawberry.jpeg'} alt={'Erdbeeren Sticker'} width={240} height={320}/>
               <MDXRemote source={content} components={COMPONENT_MAP} />
                </div>
            </div>
        </article>
    );
}

export default BlogPost;
