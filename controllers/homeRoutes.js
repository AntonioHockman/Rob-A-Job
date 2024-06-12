const router = require('express').Router();
const { User } = require('../models/User');
const { Job } = require('../models/Job');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const jobData = await Job.findAll();
        return res.render('homepage', jobData)

    } catch (err) {
        res.status(500).json({err: 'Internal Server Error'});
    }
});

router.get('/user', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
    })
        return res.render('users', userData)

    } catch (err) {
    res.status(500).json({err: 'Internal Server Error'});
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
    return;
    }

    res.render('login');
});


module.exports = router;
