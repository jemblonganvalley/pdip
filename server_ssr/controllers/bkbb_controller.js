const express = require("express");
const { config } = require("../API/config");
const bkbb = express.Router();

bkbb.get("/bung-karno-bapak-bangsa", (req, res) => {
  config("bkbb").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/bung-karno-bapak-bangsa",
      meta_image: "",
    });
  });
});

module.exports = bkbb;
