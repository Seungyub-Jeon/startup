const express = require('express');
const db = require('../data/database');
const router = express.Router();
const { format, parse } = require('date-fns');

const formatDateForEJS = (dateStr) => {
    try {
        // 'yyyy-MM-dd HH:mm:ss' 형식의 문자열을 Date 객체로 파싱
        const date = parse(dateStr, 'yyyy-MM-dd HH:mm:ss', new Date());
        return format(date, 'yyyy-MM-dd');
    } catch (error) {
        console.error("Error formatting date:", error);
        return dateStr; // 오류 발생 시 원래 날짜 문자열 반환
    }
};

router.get('/', async (req, res) => {
    const profiles = await db.getDb().collection('profiles').find().toArray();
    const supports = await db.getDb().collection('StartupSupport').find().toArray();
    const groups = await db.getDb().collection('groups').find().toArray();
    res.render('home', { pageTitle: '아임그린 | 우리는 녹색 지구를 지향합니다.', profiles: profiles, supports: supports, groups: groups, formatDate: formatDateForEJS  });



});

module.exports = router;