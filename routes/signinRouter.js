const router = require('express').Router()
const { Users } = require('../db/models')
const { checkAuth } = require('../middlewares/checkAuth')

router.route('/')
  .get(checkAuth, async (req, res) => {
    res.render('signin')
  })
  .post(checkAuth, async (req, res) => {
    try {
      const { email, password } = req.body
      if(email && password) {
        const user = Users.findOne({ where: { email, password }})
        if(user) {
          req.session.userId = user.id
        }
        res.json( { user })
      }
    } catch (err) {
      res.redirect('/signin')
    }
})

module.exports = router
