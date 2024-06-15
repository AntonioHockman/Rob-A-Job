const router = require("express").Router();
const { User, Job, Applicant } = require("../models");

//const withAuth = require('../utils/auth');

// homepage with signup/login form
router.get("/", async (req, res) => {
  try {
    const jobData = await Job.findAll({
      include: [
        {
          model: Applicant,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
      ],
    });

    // Above we get all jobs for our hompage and ther applicants.

    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    // Above, if there is no job data we send a message saying no data found!

    const jobDataWithCounts = await Promise.all(
      // Above, we use promise.all to chain promises
      jobData.map(async (job) => {
        // Above, we do  async map through our job data
        const totalApplicants = await Applicant.count({
          where: {
            job_id: job.id,
          },
        });
        // Above , while mapping through the data we ask to get the applicant count where the applicant job_id equlas the same id in the job table.

        return {
          ...job.toJSON(), // Convert Sequelize instance to plain object
          totalApplicants, // Add totalApplicants property
        };

        // Above, we return this data in json and spread object to copy the job object and add a new property total applicants.
      })
    );

    res.status(200).render("homepage", {
      jobDataWithCounts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get("/login", async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above, is a simple route to get us to the log in page.

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

module.exports = router;
