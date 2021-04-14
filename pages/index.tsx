import Head from 'next/head';
import Link from 'next/link';
import Layout from '../component/layout';
import { siteTitle } from '../component/layout/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This user have interesting post</p>
        <Link href="/posts/first-post">
          <a>POSTS</a>
        </Link>
      </section>
    </Layout>
  );
}
