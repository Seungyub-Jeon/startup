const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('events', { pageTitle: 'Events' });
});
router.get('/event', (req, res) => {
    res.render('event', { pageTitle: 'Event' });
});

module.exports = router;