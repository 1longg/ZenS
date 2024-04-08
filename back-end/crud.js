const connectDB = require("./db.js");

const createArticles = (db, content) => {
  const query = "INSERT INTO articles (content) VALUES (?)";
  db.runQuery(query, [content]);
};

const addAllArticles = (db, articles) => {
  articles.forEach((article) => {
    createArticles(db, article);
  });
};

const createUser = (db, params, callback) => {
  const query = "INSERT INTO users (id, a1, a2, a3, a4) VALUES (?, ?, ?, ?, ?)";
  db.runQuery(query, params, callback);
};

const readArticles = (db, id) => {
  const query = "Select * from articles where id = ?";
  return db.get(query, [id]);
};


const updateUser = (db, user_id, article_id) => {
  const query = `UPDATE users SET a${article_id} = true WHERE id = ?`;
  db.runQuery(query, [user_id]);
};

const findAricleUserUnread = async (db, id) => {
  const query = "Select * from users where id = ?";
  const user = await db.get(query, [id]);
  let article_id;
  if(!user.a1) article_id = 1;
  else if(!user.a2) article_id = 2;
  else if(!user.a3) article_id = 3;
  else if(!user.a4) article_id = 4;
  console.log(id, article_id)
  const article = await readArticles(db, article_id);
  return article
};

module.exports = {
  createArticles,
  createUser,
  readArticles,
  updateUser,
  addAllArticles,
  findAricleUserUnread
};
