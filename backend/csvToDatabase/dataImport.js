import fs from "fs"
import * as path from 'path'
import csv from "csvtojson"
import db from "../connectDb.js"



async function importData() {
  try {
    // Get an array of all CSV files in the "data" directory
    const dataDir = path.join(path.dirname(new URL(import.meta.url).pathname), "data");
    const csvFiles = fs
      .readdirSync(dataDir)
      .filter((file) => file.endsWith(".csv"));

    // Read the CSV files and parse them into JSON objects
    const jsonArray = await Promise.all(
      csvFiles.map((file) => csv().fromFile(path.join(dataDir, file)))
    );
    
    // Flatten the jsonArray [ [{},{},{}], [{},{},{}], [{},{},{}]=====> [{},{},{}]
    const allJourneys = jsonArray.flat();

    const chunkSize = 1000; // Set the number of records to insert at a time
    const chunks = [];
    for (let i = 0; i < allJourneys.length; i += chunkSize) {
      chunks.push(allJourneys.slice(i, i + chunkSize));
    }

    for (const chunk of chunks) {
      const results = [];
      for (const data of chunk) {
        const duration = parseInt(data["Duration_sec"]);
        const distance = parseInt(data["Covered_distance_m"]);
        if (
          !isNaN(duration) &&
          !isNaN(distance) &&
          duration >= 10 &&
          distance >= 10
        ) {
          results.push({
            departure: data["Departure"],
            return_info: data["Return"],
            departure_station_id: parseInt(data["Departure_station_id"]),
            departure_station_name: data["Departure_station_name"],
            return_station_id: parseInt(data["Return_station_id"]),
            return_station_name: data["Return_station_name"],
            covered_distance: parseInt(data["Covered_distance_m"]),
            duration: parseInt(data["Duration_sec"]),
          });
        }
      }
      // let is important here
      let query =
        "INSERT INTO journeys (departure, return_info, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_m, duration_s) VALUES ";

      for (let i = 0; i < results.length; i++) {
        const result = results[i];

        const values = `('${result.departure}', '${result.return_info}', ${result.departure_station_id}, '${result.departure_station_name}', ${result.return_station_id}, '${result.return_station_name}', ${result.covered_distance}, ${result.duration})`;

        query += values;

        if (i < results.length - 1) {
          query += ",";
        }
      }

     

      await db.query(query);
    }
    console.log("Data imported successfully!");
  } catch (err) {
    console.error("Error importing data: ", err);
  }
}

export default importData
