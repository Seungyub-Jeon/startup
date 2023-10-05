const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('groups', { pageTitle: 'Groups' });
});
router.get('/group-profile', (req, res) => {
    res.render('group-profile', { pageTitle: 'group-profile' });
});

module.exports = router;