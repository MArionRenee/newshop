import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { jsx, css } from '@emotion/core';

export default function Tea() {
  return (
    <div>
      <Layout>
        <Head>
          <title>TeaLovers</title>
        </Head>

        <h1>TeaLovers</h1>
      </Layout>
    </div>
  );
}
