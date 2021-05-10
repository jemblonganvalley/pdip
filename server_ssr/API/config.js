const fetch = require("isomorphic-unfetch");
const { token } = require("./token");

const config = async (page) => {
  const tk = await token();
  return await fetch(`https://data.pdiperjuangan.id/api/web/config/${page}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tk}`,
    },
  })
    .then((result) => result.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const detailArticle = async (id, slug) => {
  const tk = await token();
  return await fetch(`https://data.pdiperjuangan.id/api/blog/find/?id=${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tk}`,
    },
  })
    .then((result) => result.json())
    .then((data) => {
      return {
        ...data.query,
        description: data.query.description
          .substr(0, 300)
          .replace("<p>", "")
          .replace("</p>", "")
          .replace("<em>", "")
          .replace("</em>", "")
          .replace("<a>", "")
          .replace("</a>", "")
          .replace(/<\/?[^>]+(>|$)/g, ""),
      };
    })
    .catch((err) => {
      return err;
    });
};

module.exports = { config, detailArticle };
