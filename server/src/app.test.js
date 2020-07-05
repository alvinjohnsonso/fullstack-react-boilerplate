const supertest = require("supertest");
const app = require("./app");

describe("GET /api/v1/", () => {
  it("should respond with json data", async () => {
    const response = await supertest(app)
      .get('/api/v1/')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.message).toEqual("Hello and welcome to the api!" )
  })
})