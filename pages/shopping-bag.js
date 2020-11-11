import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import Layout from '../components/Layout';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import { teas } from 'util/database';
import React, { useState } from 'react';

// import Head from 'next/head';
// import Link from 'next/link';
// import Layout from '../components/Layout';
// /** @jsx jsx */
// import { jsx, css } from '@emotion/core';
// import nextCookies from 'next-cookies';
// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import { finalBag } from '../util/final-bag';
// import { total } from '../util/total-sum';
// import { GetServerSidePropsContext } from 'next';
// import { Reload } from '../util/reload';

const white = css`
  background-color: #ffffff !important;
`;

const titleshop = css`
  margin-bottom: 50px;
`;

const container = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const img = css`
  width: 340px;
  height: 500px;
  border-radius: 8px;
  margin-left: 30px;
  margin-top: 80px;
`;

const tinyImg = css`
  height: 60px;
`;

export default function CheckOut(props) {
  const [shoppingBag, setShoppingBag] = useState(props.shoppingBag || []);
  console.log(shoppingBag);

  return (
    <div>
      <Layout>
        <Head>
          <title>Shopping Bag</title>
        </Head>
        <main>
          <div css={container}>
            {/* <img
              css={img}
              src="/images/shopping-bag.jpg"
              alt="shopping bag"
            ></img>{' '} */}
            <table>
              <tbody>
                <tr>
                  <td css={white} colspan="5">
                    <h1 css={titleshop}>Your Shopping Bag</h1>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Prize</th>
                  <th></th>
                </tr>
                {/* {tea.map((tea) => (
                  <tr key={tea.id}>
                    <td>
                      <img css={tinyImg} src={`${tea.image}`} alt="tea"></img>
                    </td>
                    <td>{tea.name}</td>
                    <td>{tea.amount}</td>
                    <td>{tea.price} €</td>
                    <td></td>
                  </tr>
                ))} */}
                <tr>
                  <td>Total:</td>
                  <td>{props.teas.name}</td>
                  <td></td>
                  <td>
                    <Link href={`/check-out`}>
                      <button>Pay now</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context) {
  //comes from next-cookie
  const allCookies = nextCookies(context);
  const shoppingBag = allCookies.shoppingBag || [];
  const numberofItems = allCookies.numberofItems || 0;
  // dynamic import, imports all shoes from databse
  const { getTeas } = await import('../util/database');
  const tea = await getTeas();
  return {
    props: {
      shoppingBag,
      numberofItems,
      tea,
    },
  };
}
