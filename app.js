const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;
const Section = require("./models/section.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

dotenv.config();


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Database connection error:', err));


app.get("/", (req, res) => {
  res.render('index');
})

app.listen(PORT, (req,res) =>
  console.log(`Server running on http://localhost:${PORT}`)
);