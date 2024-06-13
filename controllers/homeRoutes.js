const router = require("express").Router();
const { User, Job, Applicant } = require("../models");

//const withAuth = require('../utils/auth');

// homepage with signup/login form
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/jobs');
    return;
  }
  // res.render('');
});


// jobpage with list of all jobs with users that posted the job and associated # of applicants
router.get("/jobs", async (req, res) => {
  try {
    const jobData = await Job.findAll({
      include: [{ model: User }, { model: Applicant }],
    });

    if (!jobData) {
      res.status(404).json({ message: 'No data found!' });
      return;
    }

    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// page with single job (id: 1,2,3) and associated applicants (users: 2, 4)
router.get("/jobs/:id", async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [{ model: Applicant, include: [{ model: User }]}]
    })

    if (!jobData) {
      res.status(404).json({ message: 'No job with that id' });
      return;
    }

    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'});
  }
});


// userpage with company users and posted jobs 
router.get("/users", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Job }],
      attributes: { exclude: ['password'] }
    });

    if (!userData) {
      res.status(404).json({ message: 'No data found!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'});
  }
});


module.exports = router;
