const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const response = await userController.logIn({
        email: req.body.email,
        password: req.body.password,
      });
      res.send(response);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const response = await userController.createUser({
        email: req.body.email,
        password: req.body.password,
      });
      res.send(response);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
