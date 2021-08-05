const express = require("express");
const { config, gallery } = require("../API/config");
const berita = express.Router();

berita.get("/berita", (req, res) => {
  config("berita").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/berita",
      meta_image:
        "http://192.168.8.18/public/uploads/page/10122020060023NeR.jpeg",
    });
  });
});

berita.get("/gallery", (req, res) => {
  gallery("berita").then((result) => {
    res.render("main", {
      page_title: "Gallery PDI Perjuangan",
      meta_keyword: result.query.data[0].description,
      meta_description: result.query.data[0].description,
      meta_url: "https://pdiperjuangan.id/gallery",
      meta_image: `http://192.168.8.18/${result.query.data[0].path}`,
    });
  });
});

berita.get("/gallery/detail-gallery/:id/:slug", (req, res) => {
  gallery("berita").then((result) => {
    res.render("main", {
      page_title: "Gallery PDI Perjuangan",
      meta_keyword: result.query.data[0].description,
      meta_description: result.query.data[0].description,
      meta_url: "https://pdiperjuangan.id/gallery",
      meta_image: `http://192.168.8.18/${result.query.data[0].path}`,
    });
  });
});

module.exports = berita;
