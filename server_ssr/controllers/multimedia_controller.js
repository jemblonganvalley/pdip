const express = require("express");
const { config, detailArticle, detailMultimedia } = require("../API/config");
const multimedia = express.Router();

multimedia.get("/multimedia", (req, res) => {
  config("multimedia").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/multimedia",
      meta_image:
        "https://data.pdiperjuangan.id/public//uploads/page/10122020060023NeR.jpeg",
    });
  });
});

multimedia.get("/multimedia/:sub_page", (req, res) => {
  const { sub_page } = req.params;
  config("multimedia").then((result) => {
    res.render("main", {
      page_title: `${sub_page} PDI Perjuangan`,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/multimedia",
      meta_image:
        "https://data.pdiperjuangan.id/public//uploads/page/10122020060023NeR.jpeg",
    });
  });
});

multimedia.get("/detail-multimedia/:id/:slug", (req, res) => {
  const { id, slug } = req.params;
  detailMultimedia(id, slug)
    .then((result) => {
      console.log(result);
      res.render("main", {
        page_title: slug.split("-").join(" "),
        meta_keyword: result.title,
        meta_description: result.description,
        meta_url: `https://pdiperjuangan.id/detail-multimedia/${id}/${slug}`,
        meta_image: `https://img.youtube.com/vi/${result.path}/0.jpg`,
        meta_video: `https://www.youtube.com/v/${result.path}`,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = multimedia;
