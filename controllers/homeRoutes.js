const router = require('express').Router();
const { User } = require('../models/User');
const { Job } = require('../models/Job');
const withAuth = require('../utils/auth');

// rendering homepage with all jobs
router.get('/', async (req, res) => {
    try {
        const jobData = await Job.findAll();
        return res.render('homepage', jobData)

    } catch (err) {
        res.status(500).json({err: 'Internal Server Error'});
    }
});

// finding single job by id
router.get('/:id', async (req, res) => {
    try {
      const jobData = await Job.findByPk(req.params.id, {
        include: [{ model: User }]
      })
  
      if (!jobData) {
        res.status(404).json({message: 'No job with that id'});
        return;
      }
      res.status(200).json(jobData);
    } catch (error) {
      res.status(500).json({message: 'Internal Server Error'});
    }
  });

// render user page with all users
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

// finding single user by id
router.get('/user/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        include: [{ model: Job }]
      })
  
      if (!userData) {
        res.status(404).json({message: 'No user with that id'});
        return;
      }
      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json({message: 'Internal Server Error'});
    }
  });

//  rendering login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
    return;
    }

    res.render('login');
});


module.exports = router;
