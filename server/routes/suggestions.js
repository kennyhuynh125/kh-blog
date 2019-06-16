const express = require('express');
const suggestionController = require('../controllers/suggestions');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const response = await suggestionController.getSuggestions();
      res.send(response);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const response = await suggestionController.createSuggestion({
        name: req.body.name,
        suggestion: req.body.suggestion,
        suggestionType: req.body.suggestionType,
      });
      res.send(response);
    } catch (err) {
      next(err);
    }
  });

router.route('/:id')
  .post(async (req, res, next) => {
    try {
      const response = await suggestionController.deleteSuggestion({
        id: req.params.id,
      });
      res.send(response);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
