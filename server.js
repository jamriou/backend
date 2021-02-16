import express from "express";
import path from "path";
import cors from "cors";

const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

const classes = ["warrior", "mage", "ranger"];

app.get("/newClass", (req, res) => {
  const index = Math.floor(Math.random() * Math.floor(3));
  console.log(index);
  const yourNewClass = classes[index];
  res.send(yourNewClass);
});

console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(80);
console.log("backend started");
