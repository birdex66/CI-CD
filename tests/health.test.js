const request = require("supertest");
const app = require("../src/app");

describe("GET /api/health", () => {
  it("returns 200 and status ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});

// -------------------------------------------------------
// TODO: Add tests for your own routes here.
// For routes that need MongoDB/Redis, look into
// jest mocks or mongodb-memory-server for in-memory testing.
// -------------------------------------------------------
