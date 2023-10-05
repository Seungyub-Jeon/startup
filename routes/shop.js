const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop', { pageTitle: 'Shop' });
});
router.get('/product', (req, res) => {
    res.render('product', { pageTitle: 'product' });
});

module.exports = router;