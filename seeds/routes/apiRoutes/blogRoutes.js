const router = require('express').Router();
const { postBlog, updateBlog, deleteBlog } = require('../../controllers/blogController');


// /api/blog routes

// Route to post a new blog
router.post('/post', postBlog);

// Route to update a blog
router.put('/:blogId', updateBlog);

// Route to delete a blog
router.delete('/:blogId', deleteBlog)

module.exports = router;