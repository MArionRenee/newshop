import Layout from '../../components/Layout';
import Head from 'next/head';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';

const img = css`
  width: 700px;
  margin-left: 30px;
  border-radius: 20%;
`;


const teaInfo = css`
  display: flex;
  justify-content: flex-start;
  margin-top: 80px;
  font-size: 18px;
`;

const description = css`
  margin-right: 50px;
`;

const info2 = css`
font-size: 22px
`;

const ul = css`
  list-style-type: none;
`;

const name = css`
font-size: 48px;
`;

export default function Tea(props) {
  const product = tea.find((currentTea) => {
    if (currentTea.id === props.id) {
      return true;
    }

    return false;
  });

  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
      </Head>

      <div css={teaInfo}>
        <img css={img} src={product.image} alt={product.name}></img>

        <ul css={ul}>
          <li css={name}>{product.name}</li>
          <p>
            <li css={description}>{product.description}</li>
          </p>
          <li css={info2}>Price: {product.price}€</li>
          <br />
          <button>Bag it!</button>
        </ul>
      </div>
    </Layout>
  );
}

//This is run by Next.js BEFORE the component above
//is run, and passes in the props - all of this is inside the server!
//This does not show up in the browser
export function getServerSideProps(context) {
  // console.log(context);
  return {
    props: { id: context.query.id },
  };
}
