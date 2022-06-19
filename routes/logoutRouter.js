const router = require('express').Router()

router.route('/')
.get((req, res) => {
  req.session.destroy((err) => {
    if(err) {
      return res.sendStatus(500)
    }
    res.clearCookie('fridger').redirect('/')
  })
})

module.exports = router
