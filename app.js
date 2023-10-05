const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const { render } = require('ejs');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const defaultRoutes = require('./routes/default');
app.use('/', defaultRoutes);

const blogRoutes = require('./routes/blog');
app.use('/blog', blogRoutes);

const shopRoutes = require('./routes/shop');
app.use('/shop', shopRoutes);

const groupRoutes = require('./routes/group');
app.use('/groups', groupRoutes);

const membersRoutes = require('./routes/members');
app.use('/members', membersRoutes);

const coursesRoutes = require('./routes/courses');
app.use('/courses', coursesRoutes);

const eventsRoutes = require('./routes/events');
app.use('/events', eventsRoutes);

const freelancersRoutes = require('./routes/freelancers');
app.use('/freelancers', freelancersRoutes);

app.use(function(req, res, next) {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).render('500', { pageTitle: 'Internal Server Error' });
});




app.listen(3001);
