import Head from 'next/head';
import Layout from '../components/Layout';
import { jsx, css } from '@emotion/core';
import Cookies from 'js-cookie';

const image = css`
  height: 350px;
  margin-top: 80px;
  margin-left: 180px;
  margin-right: 80px;
  border-radius: 30%;
`;

const container = css`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 180px;
`;

export default function ThankYou() {
  const numberofItems = Cookies.remove('numberofItems', {
    path: './thank-you',
  });
  const arrayofIds = Cookies.remove('arrayofIds', { path: './thank-you' });

  return (
    <div>
      <Layout>
        <Head>
          <title>TeaLovers say THANK YOU!</title>
        </Head>

        <main css={container}>
          <img css={image} src={'/images/thank-you.jpg'} alt="TeaLovers say thank you!"></img>
          <p>
            Thank you for choosing our teas! <br /> Enjoy your TeaLicious Moment! <br />
            We look forward to seeing you again soon!
          </p>
        </main>
      </Layout>
    </div>
  );
}
