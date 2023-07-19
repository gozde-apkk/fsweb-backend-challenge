const JWT_SECRET = process.env.JWT_SECRET || "topSecret";
const jwt = require("jsonwebtoken");
const db = require('../data/db-config');

require("dotenv").config();

function generateToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

module.exports = {
    JWT_SECRET: JWT_SECRET,
    generateToken}