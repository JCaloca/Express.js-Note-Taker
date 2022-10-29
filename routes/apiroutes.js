const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

router.post("/notes", (req, res) => {
  console.log(req.body);
  let obj = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
  console.log(obj);
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let db = JSON.parse(data);
    db.push(obj);
    console.log(db);
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
      return res.json(db);
    });
  });
});

module.exports = router;
