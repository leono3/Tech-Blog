const { Comment } = require("../models");

const postComment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.comment,
      blogId: req.params.blogId,
      userId: req.session.user.id,
    });
    res.status(200).json(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const updateComment = async (req, res) => {
  try {
    const id = req.params.commentId;
    const response = await Comment.update(req.body, {
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const deleteComment = async (req, res) => {
  try {
    const id = req.params.commentId;
    const response = await Comment.destroy({
      where: {
        id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = {
  postComment,
  updateComment,
  deleteComment,
};
