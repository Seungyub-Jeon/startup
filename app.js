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
app.get('/blog/blog-page', (req, res) => {
    res.render('blog-page', { pageTitle: 'blog-page' });
});
app.get('/shop', (req, res) => {
    res.render('shop', { pageTitle: 'Shop' });
});
app.get('/shop/product', (req, res) => {
    res.render('product', { pageTitle: 'product' });
});
app.get('/groups', (req, res) => {
    res.render('groups', { pageTitle: 'Groups' });
});
app.get('/groups/group-profile', (req, res) => {
    res.render('group-profile', { pageTitle: 'group-profile' });
});
app.get('/members', (req, res) => {
    res.render('members', { pageTitle: 'Members' });
});
app.get('/members/members-page', (req, res) => {
    res.render('members-page', { pageTitle: 'members-page' });
});
app.get('/courses', (req, res) => {
    res.render('courses', { pageTitle: 'Courses' });
});
app.get('/courses/courses-page', (req, res) => {
    res.render('courses-page', { pageTitle: 'courses-page' });
});
app.get('/events', (req, res) => {
    res.render('events', { pageTitle: 'Events' });
});
app.get('/events/event', (req, res) => {
    res.render('event', { pageTitle: 'Event' });
});
app.get('/freelancers', (req, res) => {
    res.render('freelancers', { pageTitle: 'freelancers' });
});



app.listen(3000);
