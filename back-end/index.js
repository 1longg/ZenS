const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./db.js");
const { addAllArticles, createUser, readArticles, updateUser, findAricleUserUnread } = require("./crud.js");
const dataArticles = require("./dataArticles.js");
const port = 3000;

app.use(cookieParser());
app.use(express.json());
const db = new connectDB("ZenS.db");

const createArticles = `CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        content TEXT NOT NULL
      );`;
const createUsers =
  "CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY , a1 boolean, a2 boolean, a3 boolean, a4 boolean);";

Promise.all([db.runQuery(createArticles), db.runQuery(createUsers)]).then(
  () => {
    addAllArticles(db, dataArticles);
  }
);

app.get("/", async (req, res) => {
  if (req.cookies.id) {
    console.log('old user', req.cookies.id)
    const article = await findAricleUserUnread(db, req.cookies.id)
    res.send({data: article});
  } else {
    console.log('new user')
    const id = uuidv4();
    db.runQuery(
      "INSERT INTO users (id, a1, a2, a3, a4) VALUES (?, ?, ?, ?, ?)",
      [id, false, false, false, false]
    );
    res.cookie("id", id, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 86400000), //expries in 24 hours
    });
    const a1 = await readArticles(db, 1)
    res.send({data: a1});
  }
});

app.get("/articles/:id", async (req, res) => {
  const id = req.params.id;
  updateUser(db, req.cookies.id, Number(id-1));
  const article = await readArticles(db, id);
  res.send({data: article});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
