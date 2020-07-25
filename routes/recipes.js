const { getRecipes } = require("../controllers/recipes");
const express = require("express");
const app = express();

app.get("/recipes", getRecipes);

module.exports = app;
