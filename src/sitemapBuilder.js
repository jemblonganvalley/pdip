require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./Router").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://pdiperjuangan.id")
    .save("../build/sitemap.xml");
}

generateSitemap();
