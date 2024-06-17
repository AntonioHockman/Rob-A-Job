const router = require("express").Router();
const { User, Job, Applicant, Comment } = require("../../models");
const withAuth = require('../../utils/auth');




router.get("/:id", withAuth, async (req, res) => {
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

    res.status(200).render("comment", {
      newJobData,
      userId
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

router.post("/employer/:id", withAuth, async (req, res) => {
  try {
    // normal job data
    const userId = req.session.userId;
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Applicant,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
        {
          model: Comment,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        }
      ],
    });

    if (!jobData) {
      res.status(404).json({ message: "No job found!" });
      return;
    }
    //  creating a comment
    const { comment_text } = req.body;

    if (!comment_text) {
      res.status(400).json({ message: "Comment text is required." });
      return;
    }
    
    const commentData = await Comment.create({
      comment_text,
      user_id: userId,
      job_id: req.params.id
    });
    
    if (!commentData) {
      res.status(500).json({ message: "Failed to create comment." });
      return;
    }

    // refresh jobData to include updated comments
    const updatedJobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Applicant,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
        {
          model: Comment,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        }
      ],
    });

    const newJobData = updatedJobData.get({ plain: true });
    console.log(newJobData);
    //  render page with new data
    res.status(200).render("ecommentpage", {
      newJobData,
      userId
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;

// above, is route to post a comment on employer comment page


router.get("/comments/:id", withAuth, async (req, res) => {
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

    res.status(200).render("commentpage", {
      newJobData,
      userId
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

//Above is a route to get to the employer comment page. 
















module.exports = router;
