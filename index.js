import express from "express";
import bodyParser from "body-parser";

// setup 
const app = express();
const port = 3000;

// setup directory for static files (for EJS files)
app.use(express.static("public"));

// process form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});