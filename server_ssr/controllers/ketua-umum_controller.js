const express = require("express");
const { config } = require("../API/config");
const ketuaumum = express.Router();

ketuaumum.get("/ketua-umum", (req, res) => {
  config("ketua-umum").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/ketua-umum",
      meta_image:
        "https://data.pdiperjuangan.id/public/uploads/page/17122020053115yVr.jpeg",
    });
  });
});

module.exports = ketuaumum;
