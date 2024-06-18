const router = require('express').Router();
const { User, Job, Applicant } = require("../../models");
const withAuth = require('../../utils/auth');

// Above, is our router instance , models and our seesions with auth function.



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
    // Above, we include the model applicant and include the user model inside the applicant model.
    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newJobData = jobData.get({ plain: true });
    // Above we set plain to true to use the data in handle bars.

    res.status(200).render("mansinglejob", {
      newJobData,
      userId
    });
  } catch (err) {
    res.status(500).json(err);
  }
  // Above we pass the data to handle bars templete named mansinglejob
});

// Above, is the route that gives us the manager single job view



router.get("/ajob/:id", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const jobData = await Job.findByPk(req.params.id, {
      // Above we find a job by its primary key.
      include: [
        {
          model: Applicant,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
      ],
    });
    // Above, we include the model applicant and include the user model inside the applicant model.
    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }
    // Above we check if the data exist 
    const newJobData = jobData.get({ plain: true });
    // Above, we have to turn to data to plain or to json in order to use it with handlebars 
    res.status(200).render("appsinglejob", {
      newJobData,
      userId
    });
    // ABove, we pass the data to handlebars template named appsinglejob.
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
  