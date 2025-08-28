import express from "express";
import bodyParser from "body-parser";

const app = express();
const port= 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts=[];
app.get("/",(req,res)=>{
res.render("home",{posts});
});

app.get("/new",(req,res)=>{
res.render("new-post");
});

app.post("/new",(req,res)=>{
const {title , content}=req.body;
posts.push({id:Date.now(),title,content});
res.redirect("/");
});

app.get("/edit/:id",(req,res)=>{
const post=posts.find(p=> p.id ==Number(req.params.id));
if (!post) {
    return res.status(404).send("Post not found");
  }
  
res.render("edit-post",{post});
});

app.post("/edit/:id",(req,res)=>{
const {title,content} = req.body;
const post = posts.find(p=> p.id ==Number(req.params.id));
post.title=title;
post.content=content;
res.redirect("/");
});

app.post("/delete/:id",(req,res)=>{
posts=posts.filter(p=> p.id !=Number(req.params.id));
res.redirect("/");
});

app.listen(port,()=>{
console.log("server is running");
})