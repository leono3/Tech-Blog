const { Blog } = require("../models");

const postBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      blog: req.body.blog,
      userId: req.session.user.id,
    });
    res.status(200).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const id = req.params.blogId;
    const response = await Blog.update(req.body, {
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

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.blogId;
    const response = await Blog.destroy({
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
  postBlog,
  updateBlog,
  deleteBlog,
};
