const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('freelancers', { pageTitle: 'freelancers' });
});


module.exports = router;