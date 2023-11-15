const router = require('express').Router();
const { Trip } = require('../../models');

// CREATE a trip
router.post('/', async (req, res) => {
  try {


  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a trip
router.delete('/:id', async (req, res) => {
  try {


  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
