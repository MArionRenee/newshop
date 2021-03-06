/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import React from 'react';

const header = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  font-size: 15px;
`;

const icon = css`
  height: 45px;
`;

const a = css`
  font-family: 'Quicksand', sans-serif;
  font-size: 25x;
  padding: 10px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <header css={header}>
      <Link href="/">
        <a css={a}>Home</a>
      </Link>
      <Link href="/tea/product-list">
        <a css={a}>All Products</a>
      </Link>
      <Link href="/">
        <a css={a}>New In</a>
      </Link>
      <Link href="/">
        <a css={a}>On Sale</a>
      </Link>
      <Link href="/shopping-bag">
        <a css={a}>
          <img
            css={icon}
            src="/shopping-teabag.png"
            alt="shopping teabag"
          ></img>
        </a>
      </Link>
    </header>
  );
}
