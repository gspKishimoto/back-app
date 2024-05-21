const express = require('express');
const router = express.Router();
const templateService = require('../services/templateService');

// Template routes
router.post('/template', templateValidator, async function (req, res, next) {
  try {
    let result = await templateService.template(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
