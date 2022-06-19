const express = require('express')
const morgan = require('morgan')
const path = require('path')
const hbs = require('hbs')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)


const indexRouter = require('./routes/indexRouter')
const signupRouter = require('./routes/signupRouter')
const signinRouter = require('./routes/signinRouter')
const logoutRouter = require('./routes/logoutRouter')

// const { locals } = require('./middlewares/locals')
const { checkSession } = require('./middlewares/checkAuth')

const app = express()

app.set('views', (__dirname, 'views'))
app.set('view engine', 'hbs')

const sessionConfig = {
  name: 'fridger',
  secret: 'nofridge',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400,
  },
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionConfig))

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))

app.use(express.json())
hbs.registerPartials(`${__dirname}/views/partials`)
app.use(cookieParser())
app.use(checkSession)

// app.use(locals)

app.use('/', indexRouter)
app.use('/signup', signupRouter)
app.use('/signin', signinRouter)
app.use('/logout', logoutRouter)

app.listen(3000, () => console.log('Server started on port 3000'))


