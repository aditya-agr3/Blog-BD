const express = require("express");
const router = express.Router();

// Import Controller
const { dummyLink } = require("../controllers/LikeController");
const {createComments} = require("../controllers/CommentController");
const {createPost} = require("../controllers/postcontroller");

// mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create",createComments);
router.post("/postd/create", createPost);

// export
module.exports = router;


