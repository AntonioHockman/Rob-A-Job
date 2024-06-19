const router = require("express").Router();
const { User, Job, Applicant } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;

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
      userId
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Above, is the route that takes us to the applicant home page

router.get("/employer", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;

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
      userId
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Above is the route that takes us to the employer home page

router.get("/create", async (req, res) => {
  try {
    res.status(200).render("createaccount");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above, is a route to get us to our creat account page.


router.get("/login", async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above is the route that takes us to the log in page

router.post("/login/user", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });


    // Above we find a user with the same email 


    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // Above, we check if the password matches the user email

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });


      // Above, we save log the user in and save to sessions. 

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Above, is a route that  logs a existing user in.







module.exports = router;
