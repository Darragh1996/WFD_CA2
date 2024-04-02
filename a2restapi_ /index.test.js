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

describe("/teams route", () => {
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
