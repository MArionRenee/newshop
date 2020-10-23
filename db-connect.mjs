import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres();

// If you want to use the connection string instead for testing,
// you can try this:
//
// const sql = postgres('postgres://username:password@localhost:5432/database')

const teas = await sql`
  SELECT * from teas;
`;

console.log(teas);

sql.end();
