const request = require("supertest");
const app = require("./index.js");

jest.mock("./model/db.js", () => ({
  getTeams: (req, res) =>
    res.status(200).json([
      { id: "1", name: "Antrim" },
      { id: "2", name: "Armagh" },
      { id: "3", name: "Carlow" },
    ]),
}));

describe("GET /teams", () => {
  it("should return a list of teams", async () => {
    const response = await request(app).get("/teams");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      { id: "1", name: "Antrim" },
      { id: "2", name: "Armagh" },
      { id: "3", name: "Carlow" },
    ]);
    expect(response.type).toBe("application/json");
  });
});

describe("GET /teams/:id", () => {
  it("should return details of a specific team", async () => {
    const teamId = 1;
    const response = await request(app).get(`/teams/${teamId}`);
    console.log(response);

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveProperty("id", teamId);
    expect(response.body).toHaveProperty("name");
  });

  it("should return 404 for a non-existent team", async () => {
    const nonExistentTeamId = 9999; // big id that doesn't exist in db
    const response = await request(app).get(`/teams/${nonExistentTeamId}`);

    expect(response.statusCode).toBe(404);
  });
});
