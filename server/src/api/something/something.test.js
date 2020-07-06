const querystring = require("querystring");
const supertest = require("supertest");
const app = require("../../app");

const route = "/api/v1/something";

describe("POST api/v1/something/", () => {
  it("should return a json body", async () => {
    const message = "POSTING TO api/v1/something from test file";
    const response = await supertest(app)
      .post(route)
      .send({ message })
      .expect(200)
      .expect("content-type", /json/);

    expect(response.body.body).toEqual({ message });
  })
});

describe("GET api/v1/something/", () => {
  it("should return the queries passed", async () => {
    const query = {
      firstName: "Alvin",
      lastName: "So"
    };
    const response = await supertest(app)
      .get(`${route}?${querystring.stringify(query)}`)
      .expect(200)
      .expect("content-type", /json/);

    expect(response.body).toEqual({ query });
  })
});

describe("PUT api/v1/something/:id", () => {
  it("should return the params and body passed", async () => {
    const body = {
      firstName: "Alvin",
      lastName: "So"
    };
    const id = "aaaa-aaaa-aaaa-aaaa";
    const response = await supertest(app)
      .put(`${route}/${id}`)
      .send(body)
      .expect(200)
      .expect("content-type", /json/);

    expect(response.body).toEqual({ params: { id }, body });
  })
});

describe("DELETE api/v1/something/:id", () => {
  it("should return the params passed", async () => {
    const id = "aaaa-aaaa-aaaa-aaaa";
    const response = await supertest(app)
      .delete(`${route}/${id}`)
      .expect(200)
      .expect("content-type", /json/);

    expect(response.body).toEqual({ params: { id } });
  })
});
