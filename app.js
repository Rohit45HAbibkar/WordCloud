const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const router = require("./routes"); // Importing router module

const PORT = process.env.PORT || 4747;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://Root:<Root>@cluster0.n7ajlep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const Section = require("./models/section.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

dotenv.config();

// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));

// Using the router module to handle routes
app.use("/", router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
