const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('blog', { pageTitle: 'Blog' });
});
router.get('/blog-page', (req, res) => {
    res.render('blog-page', { pageTitle: 'blog-page' });
});

module.exports = router;