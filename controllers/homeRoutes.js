const router = require("express").Router();
const { User, Job, Applicant } = require("../models");
//const withAuth = require('../utils/auth');


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

// Above, is the route that takes us to the applicant home page

router.get("/employer", async (req, res) => {
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

    res.status(200).render("employerhome", {
      jobDataWithCounts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Above is the route that takes us to the employer home page



router.get("/login", async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above is the route that takes us to the log in page




/*
router.get("/user", (req, res) => {
  // Check if session exists
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }

  res.send(`You have visited this page ${req.session.views} times.`);
});
*/

// Above is our test for sessions







module.exports = router;
