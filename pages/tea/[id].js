import Layout from '../../components/Layout';
import React from 'react';
// import { teas } from '../../util/database';
import Head from 'next/head';
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import nextCookies from 'next-cookies';
// import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

const img = css`
  width: 200px;
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
  // const router = useRouter();

  const [shoppingBag, setShoppingBag] = useState(props.shoppingBag || []);
  console.log(shoppingBag);

  const [numberofItems, setNumberofItems] = useState(props.numberofItems);

  const [total, setTotal] = useState();

  useEffect(() => {
    Cookies.set('shoppingBag', shoppingBag);
  }, [shoppingBag]);

  useEffect(() => {
    Cookies.set('numberofItems', numberofItems);
  }, [numberofItems]);

  useEffect(() => {
    Cookies.set('total', total);
  }, [total]);

  // const handleAddtoBag = (name, image, price) => {
  //   const newShoppingBag = shoppingBag.concat({ name, image, price });

  //   setShoppingBag(newShoppingBag);

  //   setNumberofItems(newShoppingBag.length);

  //   const newTotal = total.concat(price);
  //   setTotal(newTotal);
  // };

  const handleAddtoBag = (id) => {
    console.log(id);
    const newShoppingBag = [...shoppingBag, id];
    setShoppingBag(newShoppingBag);
    //set number of Items in the shopping bag
    setNumberofItems(newShoppingBag.length);
  };

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
      {/* <Head>
        <title>{props.teas.name}</title>
      </Head> */}
      <>
        <div css={teaInfo}>
          <img css={img} src={props.tea[0].image} alt={props.tea[0].name} />

          <ul css={ul}>
            <li css={name}>{props.tea[0].name}</li>
            <p>
              <li css={description}>{props.tea[0].description}</li>
            </p>
            <li css={info2}>Price: {props.tea[0].price}€</li>
            <br />
            <button onClick={(tea) => handleAddtoBag(props.tea[0].id)}>
              Get my Tealicious Moment
            </button>
          </ul>
        </div>
      </>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  const allCookies = nextCookies(context);
  const numberofItems = allCookies.numberofItems || 0;
  const shoppingBag = allCookies.shoppingBag || [];

  const { getTeaById } = await import('../../util/database');
  const id = parseInt(context.query.id);
  const tea = await getTeaById(id);

  const { getTeas } = await import('../../util/database');
  const teas = await getTeas();
  return {
    props: { tea },
  };
}
