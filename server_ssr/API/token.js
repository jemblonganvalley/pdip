const fetch = require("isomorphic-unfetch");

const token = async () => {
  const result = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      app_id: "1555309664580",
      api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
    }),
  });

  const token = await result.json();

  return await token.token;
};

module.exports = { token };
