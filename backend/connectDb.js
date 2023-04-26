import pkg from "pg"
const { Client } = pkg

import dotenv from "dotenv";
dotenv.config();


// Connect to PostgreSQL
const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});
// Connect to the database
client.connect((err) => {
  if (err) {
    console.error("Error connecting to Postgres:", err);
    return;
  }
  console.log("Connected to Postgres database");
 
});

// Export the client so we can use it in other modules
export default client