import db from "../database/connectDb.js";

const getStationData = async (stationId) => {

  // count all the departures from the specific station
  const departureCount = await db.query(
    `
      SELECT COUNT(*) AS count
      FROM journeys
      WHERE departure_station_id = $1
      `,
    [stationId]
  );

  // count all the returns to the specific station
  const returnCount = await db.query(
    `
      SELECT COUNT(*) AS count
      FROM journeys
      WHERE return_station_id = $1
      `,
    [stationId]
  );

 // average distance of all the departures to the station
  const avgDepartureDistance = await db.query(
    `
    SELECT ROUND(AVG(covered_distance_m / 1000.0), 2) AS avg_distance_km
    FROM journeys
    WHERE departure_station_id = $1
      `,
    [stationId]
  );

   // average distance of all the returns to the station
  const avgReturnDistance = await db.query(
    `
    SELECT ROUND(AVG(covered_distance_m / 1000.0), 2) AS avg_distance_km
      FROM journeys
      WHERE return_station_id = $1
      `,
    [stationId]
  );


  // find the popular stations from where a station gets more frequent returns
  const popularReturnStations = await db.query(
     `
       SELECT j.return_station_name, COUNT(*) AS count
       FROM journeys j
       WHERE j.departure_station_id = $1
       GROUP BY j.return_station_name
       ORDER BY count DESC
      LIMIT 5
      `,
    [stationId]
  );

  
// find the popular stations from where a station gets more frequent departures
  const popularDepartureStations = await db.query(
    `
      SELECT j.departure_station_name, COUNT(*) AS count
      FROM journeys j
      WHERE j.return_station_id = $1
      GROUP BY j.departure_station_name
      ORDER BY count DESC
      LIMIT 5
      `,
    [stationId]
  );
// get the station name form the departure id.
  const stationName = await db.query(
    `SELECT departure_station_name FROM journeys WHERE departure_station_id = $1 LIMIT 1`,
    [stationId]
  );

  // create a station data object to send from the server.
  const stationData = {
    id: stationId,
    name: stationName.rows[0].departure_station_name,
    totalDepartures: departureCount.rows[0].count,
    totalReturns: returnCount.rows[0].count,
    avgDepartureDistance: avgDepartureDistance.rows[0].avg_distance_km,
    avgReturnDistance: avgReturnDistance.rows[0].avg_distance_km,
    popularReturnStations: popularReturnStations.rows.map((row) => ({
      name: row.return_station_name,
      returnCount: row.count,
    })),
    popularDepartureStations: popularDepartureStations.rows.map((row) => ({
      name: row.departure_station_name,
      departureCount: row.count,
    })),
  };

  return stationData;
};

export default getStationData;
