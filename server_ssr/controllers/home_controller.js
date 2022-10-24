const express = require("express");
const { config } = require("../API/config");
const home = express.Router();

home.get("/", (req, res) => {
  config("home").then((result) => {
    res.render("main", {
      page_title: result?.query?.set?.page_title,
      meta_keyword: result?.query?.set?.meta_keyword,
      meta_description: result?.query?.set?.meta_description,
      meta_url: "https://pdiperjuangan.id",
      meta_image:
        "https://data.pdiperjuangan.id/api/files/uploads/page/10122020060023NeR.jpeg",
    });
  });
});

home.get("/config/:page", (req, res) => {
  const { page } = req.params;
  config(page).then((result) => {
    res.json(result);
  });
});

module.exports = home;
