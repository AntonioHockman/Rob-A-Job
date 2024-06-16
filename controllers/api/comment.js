const router = require("express").Router();
const { User, Job, Applicant, Comment } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/:id", async (req, res) => {
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

    res.status(200).render("comment", {
      newJobData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Above is our route to get to the add a comment page for applicant.


router.get("/employer/:id", withAuth, async (req, res) => {
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

    res.status(200).render("ecomment", {
      newJobData,
      userId
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above is our route to get to the add a comment page for a employer.




router.get("/comments/:id", async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Applicant,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
        {model: Comment, include: [{ model: User, attributes: { exclude: ["password"] } }],  }



      ],
    });

    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newJobData = jobData.get({ plain: true });

    res.status(200).render("commentpage", {
      newJobData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

























router.get("/employer/comments/:id", withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Applicant,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
        {model: Comment, include: [{ model: User, attributes: { exclude: ["password"] } }],  }



      ],
    });

    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newJobData = jobData.get({ plain: true });

    res.status(200).render("ecommentpage", {
      newJobData,
      userId
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

















module.exports = router;
