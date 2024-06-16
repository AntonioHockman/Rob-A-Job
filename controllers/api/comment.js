const router = require("express").Router();
const { User, Job, Applicant } = require("../../models");

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
// Above is our route to get to the add a comment page.



module.exports = router;
