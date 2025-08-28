import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let header = "";
app.get("/", (req, res) => {
  header = {
    head: "<h1>Enter your name below 👇</h1>",
  };
  res.render("index.ejs", header);
});

app.post("/submit", (req, res) => {
  const firstname = req.body["fName"];
  const lastname = req.body["lName"];

  const charCount = firstname.length + lastname.length;
  res.render("index.ejs", { head: `<h1>your name has ${charCount} characters<h1>` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
