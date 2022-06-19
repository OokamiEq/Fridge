const router = require('express').Router()
const { Users } = require('../db/models')
const { checkAuth } = require('../middlewares/checkAuth')

router.route('/')
  .get(checkAuth, async (req, res) => {
    res.render('signup')
  })
  .post(checkAuth, async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (name && email && password) {
        const newUser = await Users.create({ name, email, password })
        return res.json({ newUser })
      }
    } catch (err) {
      res.redirect('/signup')
    }
  })

  module.exports = router
