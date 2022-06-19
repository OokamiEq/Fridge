const express = require('express');
const router = express.Router();

router.route('/')
.get(async (req, res) => {
  try {
  res.render('index')
} catch (err) {
  console.log(err)
}
})

module.exports = router
