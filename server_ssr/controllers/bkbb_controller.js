const express = require("express");
const { config, quotes } = require("../API/config");
const bkbb = express.Router();

bkbb.get("/bung-karno-bapak-bangsa", (req, res) => {
  config("bkbb").then((result) => {
    res.render("main", {
      page_title: result?.query?.set?.page_title,
      meta_keyword: result?.query?.set?.meta_keyword,
      meta_description: result?.query?.set?.meta_description,
      meta_url: "https://pdiperjuangan.id/bung-karno-bapak-bangsa",
      meta_image:
        "https://data.pdiperjuangan.id/api/files/page/10122020060023NeR.jpeg",
    });
  });
});

bkbb.get("/bung-karno-bapak-bangsa/quotes/:id", (req, res) => {
  const { id } = req.params;
  quotes(id).then((result) => {
    res.render("main", {
      page_title: "Bung Karno Bapak Bangsa",
      meta_keyword: result.title,
      meta_description: result.description,
      meta_url: `https://pdiperjuangan.id/bung-karno-bapak-bangsa/quotes/${id}`,
      meta_image: `https://data.pdiperjuangan.id/api/files/${result.path.replace(
        ".",
        "_thumb50."
      )}`,
    });
  });
});

module.exports = bkbb;
