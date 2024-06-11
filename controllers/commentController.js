// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// business logic

exports.createComment = async(req, res) => {
    try{
        // fetch data from req body
        const {post, user, body} = req.body;
        // create a comment object
        const comment = new Comment({
            post,user,body
        });
        
        // save the new comment into the databease
        const savedComment = await comment.save();
    }
    catch(error) {

    }
}