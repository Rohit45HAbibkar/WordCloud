const express = require("express");
const router = express.Router();

// Route for Home Page
router.get("/", (req, res) => {
  res.render("index"); // Render the home page
});

router.get("/main",(req,res)=>{
    res.render("index");
})

// Route for About Us Page
router.get("/about", (req, res) => {
  res.render("about"); // Render the about page
});

// Route for Contact Us Page
router.get("/contact", (req, res) => {
  res.render("contact"); // Render the contact page
});

// Route for Camera Page
router.get("/camera", (req, res) => {
  res.render("camera"); // Render the camera page
});

module.exports = router;
