const express = require("express");
const { config } = require("../API/config");
const multimedia = express.Router();

multimedia.get("/multimedia", (req, res) => {
  config("multimedia").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/multimedia",
      meta_image: "",
    });
  });
});

module.exports = multimedia;
