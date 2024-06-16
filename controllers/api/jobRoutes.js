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



router.get("/ajob/:id", async (req, res) => {
  try {
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













/*














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
});*/





























/*router.post('/jobs', async (req, res) => {
    // create a new job
    try {
      const jobData = await Job.create(req.body);
      res.status(200).json(jobData);
    } catch (error) {
      res.status(500).json({message: 'Internal Server Error'});
    }
  });
  
router.put('/jobs/:id', async (req, res) => {
  // update a job by its `id` value
  try {
    const jobData = await Job.update(req.body, {
      where: {
        id: req.params.id,
      }
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
  
router.delete('/jobs/:id', async (req, res) => {
  // delete a job by its `id` value
  try {
    const jobData = await Job.destroy({
      where: {
        id: req.params.id,
      }
    })

    if (!jobData) {
      res.status(404).json({message: 'No job with that id'});
      return;
    }

    res.status(200).json(jobData);
  } catch (error) {
    res.status(500).json({message: 'Internal Server Error'});
  }
});*/


  module.exports = router;
  