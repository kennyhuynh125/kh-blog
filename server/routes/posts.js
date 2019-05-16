const express = require('express');
const postController = require('../controllers/posts');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const response = await postController.getPosts();
      res.send(response);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const response = await postController.createPost({
        content: req.body.content,
        title: req.body.title,
        userId: req.body.userId,
      });
      res.send(response);
    } catch (err) {
      next(err);
    }
  });

router.route('/:id')
  .get(async (req, res, next) => {
    try {
      const response = await postController.getPost({
        id: req.params.id,
      });
      res.send(response);
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const response = await postController.updatePost({
        id: req.params.id,
        title: req.body.title,
        content: req.body.content,
      });
      res.send(response);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const response = await postController.deletePost({
        id: req.params.id,
      });
      res.send(response);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
