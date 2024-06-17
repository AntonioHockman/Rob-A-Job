const router = require('express').Router();
const { User, Job, Applicant } = require("../../models");
const withAuth = require('../../utils/auth');




router.get("/mjob/:id", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Applicant,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
      ],
    });

    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newJobData = jobData.get({ plain: true });

    res.status(200).render("mansinglejob", {
      newJobData,
      userId
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above, is the route that gives us the manager single job view



router.get("/ajob/:id", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Applicant,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
      ],
    });

    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newJobData = jobData.get({ plain: true });

    res.status(200).render("appsinglejob", {
      newJobData,
      userId
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above is the route that gives us the applicant single job view





router.get("/mjob/:id/update", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const jobData = await Job.findByPk(req.params.id, {
      
    });

    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newJobData = jobData.get({ plain: true });

    //res.status(200).json(newJobData);


    res.status(200).render("updatejob", {
      newJobData,
      userId
    })
  } catch (err) {
    res.status(500).json(err);
  }
});


// Above, is a route to get us to the updat page for a certain employers job. 





  module.exports = router;
  