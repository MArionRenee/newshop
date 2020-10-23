import Layout from '../../components/Layout';
// import { teas } from '../../util/database';
import Head from 'next/head';
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';
// import nextCookies from 'next-cookies';
// import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

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
  font-size: 22px;
`;

const ul = css`
  list-style-type: none;
`;

const name = css`
  font-size: 48px;
`;

export default function Tea(props) {
  const router = useRouter();
  const [shoppingBag, setShoppingBag] = useState();

  const [numberofItems, setNumberofItems] = useState();

  const [total, setTotal] = useState();

  // useEffect(() => {
  //   Cookies.set('shoppingBag', shoppingBag);
  // }, [shoppingBag]);

  // useEffect(() => {
  //   Cookies.set('numberofItems', numberofItems);
  // }, [numberofItems]);

  // useEffect(() => {
  //   Cookies.set('total', total);
  // }, [total]);

  // const handleAddtoBag = (name, image, price) => {
  //   const newShoppingBag = shoppingBag.concat({ name, image, price });

  //   setShoppingBag(newShoppingBag);

  //   setNumberofItems(newShoppingBag.length);

  //   const newTotal = total.concat(price);
  //   setTotal(newTotal);
  // };

  // const teas = teas.find((currentTea) => {
  //   const tea = props.teas.find((currentTea) => {
  //     if (currentTea.id === props.id) {
  //       return true;
  //     }
  //     return false;
  //   });
  // });

  return (
    <Layout>
      <Head>
        <title>{props.name}</title>
      </Head>

      <div css={teaInfo}>
        <img css={img} src={props.image} alt={props.name} />

        <ul css={ul}>
          <li css={name}>{props.name}</li>
          <p>
            <li css={description}>{props.description}</li>
          </p>
          <li css={info2}>Price: {props.price}€</li>
          <br />
          <button>Get my Tealicious Moment</button>
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  // console.log(context);
  const { getTeasById } = await import('../../util/database');

  const tea = await getTeasById(id);
  // console.log(props);
  const props = {};
  if (tea) props.tea = tea;
  return {
    props: props,
  };
}
