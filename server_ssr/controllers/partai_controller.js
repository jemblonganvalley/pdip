const express = require("express");
const { config, detailPengurus, dpdFind } = require("../API/config");
const partai = express.Router();

partai.get("/partai", (req, res) => {
  config("partai").then((result) => {
    res.render("main", {
      page_title: result?.query?.set?.page_title,
      meta_keyword: result?.query?.set?.meta_keyword,
      meta_description: result?.query?.set?.meta_description,
      meta_url: "https://pdiperjuangan.id/partai",
      meta_image:
        "https://data.pdiperjuangan.id/api/files/page/10122020060023NeR.jpeg",
    });
  });
});

partai.get("/struktur-dpp", (req, res) => {
  config("partai").then((result) => {
    res.render("main", {
      page_title: result?.query?.set?.page_title,
      meta_keyword: result?.query?.set?.meta_keyword,
      meta_description: result?.query?.set?.meta_description,
      meta_url: "https://pdiperjuangan.id/partai",
      meta_image:
        "https://data.pdiperjuangan.id/api/files/page/10122020060023NeR.jpeg",
    });
  });
});

partai.get("/partai/dpd-dpc", (req, res) => {
  config("partai").then((result) => {
    res.render("main", {
      page_title: result?.query?.set?.page_title,
      meta_keyword: result?.query?.set?.meta_keyword,
      meta_description: result?.query?.set?.meta_description,
      meta_url: "https://pdiperjuangan.id/partai",
      meta_image:
        "https://data.pdiperjuangan.id/api/files/page/10122020060023NeR.jpeg",
    });
  });
});

partai.get("/detailpengurus/:id/:name/:status", (req, res) => {
  detailPengurus(req.params.id).then((result) => {
    let desc = result?.query?.biografi.split(/\n/)[0];
    res.render("main", {
      page_title: "Pengurus Partai PDI Perjuangan",
      meta_keyword: result?.query?.nama,
      meta_description: desc,
      meta_url: `https://pdiperjuangan.id/detailpengurus/${req.params.id}/${req.params.name}/${req.params.status}`,
      meta_image: result?.query?.photo,
    });
  });
});

partai.get("/dpd/:id/:provinsi", (req, res) => {
  dpdFind(req.params.id).then((result) => {
    let desc = result?.query?.description.split(/\n/)[0];
    res.render("main", {
      page_title: result?.query?.name,
      meta_keyword: result?.query?.name,
      meta_description: desc,
      meta_url: "https://pdiperjuangan.id/partai",
      meta_image:
        "https://data.pdiperjuangan.id/api/files/page/10122020060023NeR.jpeg",
    });
  });
});

module.exports = partai;
