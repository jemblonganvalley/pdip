const express = require("express");
const { config } = require("../API/config");
const partai = express.Router();

partai.get("/partai", (req, res) => {
  config("partai").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/partai",
      meta_image: "",
    });
  });
});

partai.get("/struktur-dpp", (req, res) => {
  config("partai").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/partai",
      meta_image: "",
    });
  });
});

partai.get("/partai/dpd-dpc", (req, res) => {
  config("partai").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/partai",
      meta_image: "",
    });
  });
});

module.exports = partai;
