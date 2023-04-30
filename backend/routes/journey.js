import express from "express"
const router = express.Router();
import db from "../connectDb.js"

// Get bike journeys with pagination
router.get('/getAll', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const countQuery = await db.query('SELECT COUNT(*) FROM journeys');
  const totalCount = parseInt(countQuery.rows[0].count);
  const totalPages = Math.ceil(totalCount / limit);


  try {
    const { rows } = await db.query(
      'SELECT * FROM journeys LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    res.json({
      journeys: rows,
      page,
      totalPages,
      totalCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


// Get bike journey details by ID
router.get('/:id', async (req, res) => {
    try {
      const journeyId = parseInt(req.params.id);
      const { rows } = await db.query(
        `
        SELECT 
          departure_station_name, 
          return_station_name,
          covered_distance_m/1000 AS distance_km,
          duration_s/60 AS duration_minutes
        FROM journeys
        WHERE id = $1
        `,
        [journeyId]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Journey not found' });
      }
      res.json(rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

export default router