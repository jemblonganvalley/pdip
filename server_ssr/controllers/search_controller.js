const express = require("express");
const search = express.Router();

search.get("/search/:params", (req, res) => {
  const { params } = req.params;
  res.render("main", {
    page_title: `pencarian web pdiperjuangan.id keyword = ${params}`,
    meta_keyword: "cari berita web pdiperjuangan.id",
    meta_description: "portal resmi partai PDI Perjuangan",
    meta_url: "https://pdiperjuangan.id/search",
    meta_image:
      "https://data.pdiperjuangan.id/public/uploads/page/10122020060023NeR.jpeg",
  });
});

module.exports = search;
