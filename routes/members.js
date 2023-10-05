const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('members', { pageTitle: 'Members' });
});
router.get('/members-page', (req, res) => {
    res.render('members-page', { pageTitle: 'members-page' });
});

module.exports = router;