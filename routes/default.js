const express = require('express');
const db = require('../data/database');
const router = express.Router();
const { format, parseISO } = require('date-fns');

const formatDateForEJS = (dateStr) => {
    try {
        return format(parseISO(dateStr), 'yyyy-MM-dd');
    } catch (error) {
        console.error("Error formatting date:", error);
        return dateStr; // 기본적으로 날짜 문자열을 그대로 반환
    }
};

router.get('/', async (req, res) => {
    const profiles = await db.getDb().collection('profiles').find().toArray();
    const supports = await db.getDb().collection('StartupSupport').find().toArray();
    const groups = await db.getDb().collection('groups').find().toArray();
    res.render('home', { pageTitle: 'Home', profiles: profiles, supports: supports, groups: groups, formatDate: formatDateForEJS  });



});

module.exports = router;