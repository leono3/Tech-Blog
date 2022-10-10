const router = require("express").Router();
const {
  postComment,
  updateComment,
  deleteComment,
} = require("../../controllers/commentController");
router.post("/:blogId", postComment);
router.route("/:commentId").put(updateComment).delete(deleteComment);

module.exports = router;
