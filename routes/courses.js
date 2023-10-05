const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('courses', { pageTitle: 'Courses' });
});
router.get('/courses-page', (req, res) => {
    res.render('courses-page', { pageTitle: 'courses-page' });
});

module.exports = router;