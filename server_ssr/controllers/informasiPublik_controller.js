const express = require("express");
const { config } = require("../API/config");
const informasi = express.Router();

informasi.get("/informasi-publik", (req, res) => {
  config("informasi").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/informasi-publik",
      meta_image:
        "http://192.168.8.18/public//uploads/page/10122020060023NeR.jpeg",
    });
  });
});

module.exports = informasi;
