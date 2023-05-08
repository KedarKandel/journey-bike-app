import pkg from "pg";
const { Client } = pkg;

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

// Connect to the database and create a table if it does not exist
(async () => {
  try {
    await client.connect();
    console.log("Connected to Postgres database");
    await client.query(`
      CREATE TABLE IF NOT EXISTS journeys (
        id SERIAL PRIMARY KEY,
        departure TIMESTAMP,
        return_info TIMESTAMP,
        departure_station_id INT,
        departure_station_name VARCHAR(1255),
        return_station_id INT,
        return_station_name VARCHAR(1255),
        covered_distance_m INT,
        duration_s INT
      );
    `);
    console.log("Table created or already exists");
  } catch (err) {
    console.error("Error connecting to or creating table in Postgres:", err);
  }
})();

// Export the client so we can use it in other modules
export default client;
