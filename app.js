const express = require('express')
const path = require('path')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('index'))

app.get('/signup', (req, res) => res.render('signup'))
app.post('/signup', (req, res) => res.render('index'))

app.get('/login', (req, res) => res.render('login'))
app.post('/login', (req, res) => res.render('index'))

app.get('/index', (req, res) => res.render('index'))
app.get('/appointment', (req, res) => res.render('appointment'))

app.get('/patients', (req, res) => res.render('patients'));

app.get('/messages', (req, res) => res.render('messages'))
app.get('/medications', (req, res) => res.render('medications'))
app.get('/documents', (req, res) => res.render('documents'))
app.get('/finance', (req, res) => res.render('finance'))
app.get('/settings', (req, res) => res.render('settings'))
app.get('/chatbot', (req, res) => res.render('chatbot'))

module.exports = app
