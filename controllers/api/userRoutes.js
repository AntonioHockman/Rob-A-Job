const router = require("express").Router();
const { User, Job, Applicant, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Applicant,
          include: [
            {
              model: Job,
              include: [{ model: Applicant, include: [{ model: User }] }],
            },
            { model: User, attributes: { exclude: ["password"] } },
          ],
        },
      ],
    });

    if (!userData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newUserData = userData.get({ plain: true });

    res.status(200).render("applicantdash", {
      newUserData,
      userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above is a route to get the data for a certain user and display their data on their dash board.

router.get("/employer/:id", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Job,
          include: [
            {
              model: Applicant,
              include: [{ model: User, attributes: { exclude: ["password"] } }],
            },
          ],
        },
      ],
    });

    if (!userData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newUserData = userData.get({ plain: true });

    res.status(200).render("employerdash", {
      newUserData,
      userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above is a route to get the data for a certain user and display their data on their employer board.

router.get("/employers/create", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    res.status(200).render("createjob", {
      userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Above is a route to get the data us the page the employer uses to create a job.

router.post("/create", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (dbUserData) {
      res
        .status(400)
        .json({ message: " Email already exists. Please try again!" });
      return;
    }
    // ABove, we check if the new users email already exists.

    const userData = req.body;
    // Above, we attach the body of the request to a variable

    const newUser = await User.create(userData);
    // Above, we create a user

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUser.id;

      res
        .status(200)
        .json({ user: newUser, message: "You are now logged in!" });
    });
    // Above, we save the new user in sessions as logged in and user id.
    // loggedIn and userId are variabels we create with sessions.
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Above, is a route to create a new user.

router.post("/comment", withAuth, async (req, res) => {
  try {
    const comment_text = req.body.comment_text;
    const job_id = req.body.job_id;
    const user_id = req.session.userId;
    // Above, we attach the body of the request to a variable

    if (!comment_text || !job_id) {
      res.status(400).json({ message: "No data found" });
      return;
    }

    // Above, we check if the comment text and job id exist.

    const newComment = await Comment.create({ comment_text, job_id, user_id });

    //Above, we create a new comment with the entries.

    res.status(200).json("New Comment Created");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ABove, is a post route to for the applicant to post a comment.

router.post("/newjob", withAuth, async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "No data found" });
      return;
    }
    // ABove, we make sure the req body has data in it.

    const company_name = req.body.company_name;
    const position_title = req.body.position_title;
    const salary = req.body.salary;
    const location = req.body.location;
    const description = req.body.description;
    const responsibilities = req.body.responsibilities;
    const qualifications = req.body.qualifications;
    const schedule_info = req.body.schedule_info;
    const user_id = req.session.userId;
    // Above, we attach the body of the request to a variable

    const job = await Job.create({
      company_name,
      position_title,
      salary,
      schedule_info,
      description,
      responsibilities,
      qualifications,
      location,
      user_id,
    });

    // Above, we create a new jobe with all the entries.

    res.status(200).json("New Job Created");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Above, is aroute for the employer to past a new job

router.put("/job", async (req, res) => {
  try {
    const {
      company_name,
      position_title,
      salary,
      location,
      description,
      responsibilities,
      qualifications,
      schedule_info,
    } = req.body;

    const jobId = req.body.job_id;
    // Above, we check if the entries exist in the req body

    if (!jobId) {
      return res.status(400).json({ message: "Job ID is required" });
    }
    // ABove we check if the job id is in the body

    const job = await Job.findByPk(jobId);

    //Above, we find a job by its id
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    await job.update({
      company_name,
      position_title,
      salary,
      location,
      description,
      responsibilities,
      qualifications,
      schedule_info,
    });
    // Above we update any entry avalable.
    res.status(200).json({ message: "Job updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Above, is a put route to update a employer job.

router.post("/apply", withAuth, async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "No data found" });
      return;
    }

    const job_id = req.body.job_id;
    const user_id = req.session.userId;
    // Above, we attach the body of the request to a variable

    const existingApplicant = await Applicant.findOne({
      where: {
        job_id: job_id,
        user_id: user_id,
      },
    });

    if (existingApplicant) {
      return res
        .status(400)
        .json({ message: "User is already an applicant for this job." });
    }

    // ABove, we make sure a user can not apply twice

    const applicant = await Applicant.create({
      user_id,
      job_id,
    });

    // Above, we create a new applicant with all the entries.

    res.status(200).json("Application successfull!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
      // Above we destroy the session if the user is logged in and cal end on the status.
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Above, is our log out route for all users.

router.delete("/quit", withAuth, async (req, res) => {
  try {
    const user_id = req.session.userId;

    // Check if user exists before deletion
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user
    const deleteUser = await User.destroy({
      where: {
        id: user_id,
      },
    });

    res.status(200).json("user deleted!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/dapp", withAuth, async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "No data found" });
      return;
    }

    const job_id = req.body.job_id;
    const job_idInt = parseInt(job_id);
    const user_id = req.session.userId;

    // Delete Applicant
    const deleteApplicant = await Applicant.destroy({
      where: {
        user_id: user_id,
        job_id: job_idInt,
      },
    });

    res.status(200).json("Applicant deleted!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/djob", withAuth, async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "No data found" });
      return;
    }

    const job_id = req.body.job_id;
    const job_idInt = parseInt(job_id);
    const user_id = req.session.userId;

    // Delete Applicant
    const deleteJob = await Job.destroy({
      where: {
        id: job_idInt,
        user_id: user_id,
      },
    });

    res.status(200).json("Applicant deleted!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
