import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../component/layout';

export default function FirstPost() {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
