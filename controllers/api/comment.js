const router = require("express").Router();
const { User, Job, Applicant, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

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
      userId,
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
      userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above is our route to get to the add a comment page for a employer.

router.get("/comments/:id", withAuth, async (req, res) => {
  try {
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
        },
      ],
    });

    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newJobData = jobData.get({ plain: true });

    res.status(200).render("commentpage", {
      newJobData,
      userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Above, is a route to get to the applicant comment page

router.get("/employer/comments/:id", withAuth, async (req, res) => {
  try {
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
        },
      ],
    });

    if (!jobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newJobData = jobData.get({ plain: true });

    res.status(200).render("ecommentpage", {
      newJobData,
      userId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Above is a route to get to the employer comment page.

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
        },
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
      job_id: req.params.id,
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
        },
      ],
    });

    const newJobData = updatedJobData.get({ plain: true });
    console.log(newJobData);
    //  render page with new data
    res.status(200).render("ecommentpage", {
      newJobData,
      userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Above, is route to post a comment on employer comment page

router.delete("/delete", withAuth, async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "No data found" });
      return;
    }

    const commentID = req.body.commentId;
    const commentUserID = req.body.commentUserID;
    const job_id = req.body.job_id;
    const user_id = req.session.userId;
    const commentUserIdInt = parseInt(commentUserID); 

   // Above, we get our values from the body
   // Note, u have to parse the comment id to a number because the user id is int.



    if (commentUserIdInt === user_id) {
      const deleteComment = await Comment.destroy({
        where: {
          id: commentID,
          job_id: job_id,
          user_id: user_id,
        },
      });

      // Above, we delete  comment with all above entries.
      // for this to happen the comment user id must match the user id. 

      res.status(200).json("Delete request successfull!");
    } else {
      res.status(404).json({ message: "Cannot delete other user Comments !" });
      return;
    }

    // Above, we create a new applicant with all the entries.
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
