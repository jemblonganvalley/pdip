const express = require("express");
const { config } = require("../API/config");
const pemilu = express.Router();

pemilu.get("/pemilu", (req, res) => {
  config("pemilu").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/pemilu",
      meta_image:
        "https://data.pdiperjuangan.id/public/uploads/page/10122020060023NeR.jpeg",
    });
  });
});

module.exports = pemilu;
