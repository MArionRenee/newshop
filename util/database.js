import postgres from 'postgres';
import dotenv from 'dotenv';
import React from 'react';

// import camelcaseKeys from 'camelcase-keys';
// import { User } from './types';

dotenv.config();

const sql = postgres();

export async function getTeas() {
  const teas = await sql`
    SELECT * FROM teas;
  `;
  return teas;

  // return users.map((u) => camelcaseKeys(u));
  // This is what it looks like without a library:
  // return users.map((user) => {
  //   return {
  //     id: user.id,
  //     firstName: user.first_name,
  //     lastName: user.last_name,
  //   };
  // });
}

export async function getTeaById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const tea = await sql`
    SELECT * FROM teas WHERE id = ${id};
  `;
  return tea;
  // return teas.map((u) => camelcaseKeys(u))[0];
}

// If you want to use the connection string instead for testing,
// you can try this:
//
// const sql = postgres('postgres://username:password@localhost:5432/database')

// export async function insertUser(user) {
//   const requiredProperties = ['firstName', 'lastName', 'city'];
//   const userProperties = Object.keys(user);

//   if (userProperties.length !== requiredProperties.length) {
//     return undefined;
//   }

//   const difference = userProperties.filter(
//     (prop) => !requiredProperties.includes(prop),
//   );

//   if (difference.length > 0) {
//     return undefined;
//   }

//   const users = await sql`
//     INSERT INTO users
//       (first_name, last_name, city)
//     VALUES
//       (${user.firstName}, ${user.lastName}, ${user.city})
//     RETURNING *;
// `;

//   return users.map((u) => camelcaseKeys(u))[0];
// }

// function to get all users

// function to get a specific user

// export async function updateUserById(id,user) {
//   // Return undefined if the id is not
//   // in the correct format
//   if (!/^\d+$/.test(id)) return undefined;

//   const allowedProperties = ['firstName', 'lastName', 'city'];
//   const userProperties = Object.keys(user);

//   if (userProperties.length < 1) {
//     return undefined;
//   }

//   const difference = userProperties.filter(
//     (prop) => !allowedProperties.includes(prop),
//   );

//   if (difference.length > 0) {
//     return undefined;
//   }

//   let users: User[] = [];

//   if ('firstName' in user) {
//     users = await sql`
//       UPDATE users
//         SET first_name = ${user.firstName}
//         WHERE id = ${id}
//         RETURNING *;
//     `;
//   }

//   if ('lastName' in user) {
//     users = await sql`
//       UPDATE users
//         SET last_name = ${user.lastName}
//         WHERE id = ${id}
//         RETURNING *;
//     `;
//   }

//   if ('city' in user) {
//     users = await sql`
//       UPDATE users
//         SET city = ${user.city}
//         WHERE id = ${id}
//         RETURNING *;
//     `;
//   }

//   return users.map((u) => camelcaseKeys(u))[0];
// }

// export async function deleteUserById(id: string) {
//   // Return undefined if the id is not
//   // in the correct format
//   if (!/^\d+$/.test(id)) return undefined;

//   const users = await sql`
//     DELETE FROM users
//       WHERE id = ${id}
//       RETURNING *;
//   `;

//   return users.map((u) => camelcaseKeys(u))[0];
// }

// Old static list of users
// export const users = [
//   {
//     id: '1',
//     firstName: 'Karl',
//     lastName: 'Horky',
//     following: false,
//   },
//   {
//     id: '2',
//     firstName: 'Sabine',
//     lastName: 'Ballata',
//     following: false,
//   },
// ];
