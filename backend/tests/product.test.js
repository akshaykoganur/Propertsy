const mongoose = require("mongoose");
const request = require("supertest");

const server = require("../server");

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("POST /api/user/login", () => {
    it("should find a user", async () => {
        const res = await request(server).post("/api/user/login").send({
            name: "ab",
            email: "ab@1.com",
            contactno: 123,
            password: "ab@1.com",
        });
        expect(res.statusCode).toBe(200);
    });
});