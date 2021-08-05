const fetch = require("isomorphic-unfetch");
const { token } = require("./token");

const config = async (page) => {
  const tk = await token();
  return await fetch(`http://192.168.8.18/api/web/config/${page}`, {
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
  return await fetch(`http://192.168.8.18/api/blog/find/?id=${id}`, {
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

const detailMultimedia = async (id, slug) => {
  const tk = await token();
  return await fetch(`http://192.168.8.18/api/multimedia/youtube-find`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tk}`,
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((result) => result.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const gallery = async () => {
  const tk = await token();
  return await fetch(`http://192.168.8.18/api/gallery/data?page=1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tk}`,
    },
    body: JSON.stringify({
      order: { key: "id", value: "desc" },
      where: { key: "type", value: "image" },
      limit: 10,
    }),
  })
    .then((result) => result.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

const quotes = async (id) => {
  const tk = await token();
  return await fetch(`http://192.168.8.18/api/quotes/find`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tk}`,
    },
    body: JSON.stringify({
      id: id,
    }),
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

module.exports = { config, detailArticle, detailMultimedia, gallery, quotes };
