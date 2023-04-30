import express from "express";
const router = express.Router();
import db from "../connectDb.js";

// Get stations with pagination and search
router.get("/getAll", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const search = req.query.search || "";

  try {
    const { rows } = await db.query(
      `
      SELECT DISTINCT ON (departure_station_id)
        departure_station_id AS station_id,
        departure_station_name AS station_name
      FROM
        journeys
      WHERE
        departure_station_name ILIKE $1
      ORDER BY departure_station_id
      LIMIT $2 OFFSET $3;
      `,
      [`%${search}%`, limit, offset]
    );

    const { rows: countRows } = await db.query(
      `
      SELECT COUNT(DISTINCT departure_station_id)
      FROM journeys
      WHERE departure_station_name ILIKE $1
      `,
      [`%${search}%`]
    );
    const totalCount = parseInt(countRows[0].count);
    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      stations: rows,
      page,
      totalPages,
      totalCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
