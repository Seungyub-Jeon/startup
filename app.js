const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const { render } = require('ejs');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home' });
});
app.get('/blog', (req, res) => {
    res.render('blog', { pageTitle: 'Blog' });
});
app.get('/shop', (req, res) => {
    res.render('shop', { pageTitle: 'Shop' });
});
app.get('/groups', (req, res) => {
    res.render('groups', { pageTitle: 'Groups' });
});
app.get('/members', (req, res) => {
    res.render('members', { pageTitle: 'Members' });
});
app.get('/courses', (req, res) => {
    res.render('courses', { pageTitle: 'Courses' });
});
app.get('/events', (req, res) => {
    res.render('events', { pageTitle: 'Events' });
});



app.listen(3000);
