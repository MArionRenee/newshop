import Head from 'next/head';
import Layout from '../components/Layout';
import { jsx, css } from '@emotion/core';
import nextCookies from 'next-cookies';

const headpic = css`
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;
const intro = css`
  display: flex;
  justify-content: center;
  color: #673408;
  font-family: 'Coffee Script', sans-serif;
  margin-top: 40px;
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
`;

const galleryItem = css`
  width: 200px;
  height: 3000px;
  border-radius: 8px;
`;

export default function Home(props) {
  return (
    <div>
      <Layout numberofItems={props.numberofItems}>
        <Head>
          <title>TeaLovers</title>
        </Head>
        <main>
          <img
            css={headpic}
            src="/images/breitesmainpic.jpg"
            alt="girl drinks a cup of tea"
          />

          <h1 css={intro}>Get your TeaLiciousMoment here!</h1>

          <div css={gallery}>
            <img
              css={galleryItem}
              src="/images/teamilk.jpg"
              alt="cup of tea with milk leads to the blackteashop"
            ></img>
            <img
              css={galleryItem}
              src="/images/greentea.jpg"
              alt="cup of greentea leads to the greeanteashop"
            ></img>
            <img
              css={galleryItem}
              src="/images/spicedtea.jpg"
              alt="cup of appletea leads to the spicedteashop"
            ></img>
          </div>
        </main>
      </Layout>
    </div>
  );
}
export async function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const numberofItems = allCookies.numberofItems || '0';

  return {
    props: {
      numberofItems,
    },
  };
}
