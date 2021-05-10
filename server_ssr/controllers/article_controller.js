const express = require("express");
const { config, detailArticle } = require("../API/config");
const article = express.Router();

article.get("/article/:id/:slug", (req, res) => {
  config("berita").then((result) => {
    res.render("main", {
      page_title: result.query.set.page_title,
      meta_keyword: result.query.set.meta_keyword,
      meta_description: result.query.set.meta_description,
      meta_url: "https://pdiperjuangan.id/berita",
      meta_image: "",
    });
  });
});

article.get("/detail-article/:id/:slug", (req, res) => {
  const { id, slug } = req.params;
  detailArticle(id, slug).then((result) => {
    res.render("main", {
      page_title: slug.split("-").join(" "),
      meta_keyword: result.title,
      meta_description: result.description,
      meta_url: `https://pdiperjuangan.id/detail-article/${id}/${slug}`,
      meta_image: `https://data.pdiperjuangan.id/public/${result.path}`,
    });
  });
});

module.exports = article;
