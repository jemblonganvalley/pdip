const express = require("express");
const cors = require("cors");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();
const fetch = require("isomorphic-unfetch");
const home = require("./controllers/home_controller");
const partai = require("./controllers/partai_controller");
const berita = require("./controllers/berita_controller");
const ketuaumum = require("./controllers/ketua-umum_controller");
const multimedia = require("./controllers/multimedia_controller");
const bkbb = require("./controllers/bkbb_controller");
const informasi = require("./controllers/informasiPublik_controller");
const pemilu = require("./controllers/pemilu_controller");
const article = require("./controllers/article_controller");
const search = require("./controllers/search_controller");

app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//template engine
app.set("views", path.join(__dirname, "../build"));
app.set("view engine", "html");
app.engine(
  "html",
  hbs({
    layoutsDir: path.join(__dirname, "../layouts"),
    defaultLayout: "main.html",
  })
);

app.use(home);
app.use(partai);
app.use(berita);
app.use(ketuaumum);
app.use(multimedia);
app.use(bkbb);
app.use(informasi);
app.use(pemilu);
app.use(article);
app.use(search);

app.get("/test", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
});

app.listen(8000, () => {
  console.log("listen port 8000");
});
