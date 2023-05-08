import request from "supertest";
import app from "../server.js";

describe("Journey API", () => {

  describe("GET /journeys/all", () => {

    it("should return all journeys with pagination", async () => {
      const response = await request(app).get(
        "/api/v1/journeys/all?page=1&limit=10"
      );
      expect(response.status).toBe(200);
      expect(response.body.journeys.length).toBeGreaterThan(0);
      expect(response.body.totalPages).toBeGreaterThan(0);
      expect(response.body.totalCount).toBeGreaterThan(0);
    });

    it("should return 404 if journey is not found", async () => {
      const response = await request(app).get("/api/v1/journeys/0");
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("message", "Journey not found");
    });
  });

  describe("GET /journeys/:id", () => {

    it("should return the journey with the specified ID", async () => {
      const response = await request(app).get("/api/v1/journeys/1");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("departure_station_name");
      expect(response.body).toHaveProperty("return_station_name");
      expect(response.body).toHaveProperty("distance_km");
      expect(response.body).toHaveProperty("duration_minutes");
    });

    it("should return 404 if the journey is not found", async () => {
      const response = await request(app).get("/api/v1/journeys/0");
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty("message", "Journey not found");
    });
    
  });
});
