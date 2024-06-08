const express = require("express");
const router = express.Router();

// Define a simple route for the blog
router.get("/blogs", (req, res) => {
    res.send("List of blogs");
});

// Example of another route
router.post("/blogs", (req, res) => {
    const blogPost = req.body;
    // Here you would normally handle saving the blog post to the database
    res.status(201).send(blogPost);
});

module.exports = router;
