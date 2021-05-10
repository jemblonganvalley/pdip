const express = require("express");
const { config } = require("../API/config");
const berita = express.Router();

berita.get("/berita", (req, res) => {
  config("berita").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/berita",
      meta_image:
        "https://data.pdiperjuangan.id/public//uploads/page/10122020060023NeR.jpeg",
    });
  });
});

module.exports = berita;
