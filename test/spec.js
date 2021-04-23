const { expect } = require("chai");
const app = require("supertest")(require("../app"));
const { syncAndSeed } = require("../db");

describe("Routes", () => {
  before(() => syncAndSeed());
  describe("GET /", () => {
    it("show information about the api", async () => {
      const response = await app.get("/");
      expect(response.status).to.equal(200);
      expect(response.text).to.include("The Acme Movie API");
    });
  });
  describe("GET /api/movies", () => {
    it("show list of movies", async () => {
      const response = await app.get("/api/movies");
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(4);
    });
  });
  describe("GET /api/actors", () => {
    it("show list of actors", async () => {
      const response = await app.get("/api/actors");
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(5);
    });
  });
});
