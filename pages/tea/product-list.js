/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const intro = css`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const product = css`
  height: 200px;
  margin: 10px;
  border-radius: 20%;
  cursor: pointer;

  &:hover {
    -moz-box-shadow: 0 0 20px #666666;
    -webkit-box-shadow: 0 0 20px #666666;
    box-shadow: 0 0 20px #666666;
  }
`;

const gallery = css`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
`;

export default function TeaList(props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>TeaoLvers Teas</title>
        </Head>

        <h1 css={intro}>Our teas</h1>

        <ul css={gallery}>
          {props.teas.map((tea) => {
            return (
              <li key={tea.id}>
                <Link href={`/tea/${tea.id}`}>
                  <a>
                    <img css={product} src={`${tea.image}`} alt="tea"></img>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  const { getTeas } = await import('../../util/database');

  const teas = await getTeas();
  console.log(teas);
  // const allCookies = nextCookies(context);
  // const following = allCookies.following || [];
  return {
    props: {
      // followingFromCookie: following,
      teas,
    },
  };
}
