import pg from 'pg';

const { Client } = pg;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
console.log("db.js loaded");
client.connect()
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

export default client;