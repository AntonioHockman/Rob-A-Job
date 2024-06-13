const router = require("express").Router();
const { User, jobPosts, applicant } = require("../models");
const Job = require("../models/jobpost");

//const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: jobPosts }, { model: applicant }],
    });

    if (!userData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const JobData = await jobPosts.findByPk(req.params.id, {
       /*include: [
        {
          model: applicant,
          include: [{ model: User, attributes: { exclude: "password" } }],
        }, // Include the User model for each applicant
      ],

      attributes: { exclude: "password" }*/

      include: [
        {  model: User },{model: applicant, include:[{
          model: User
        },]}]

      //include: [{ model: jobPosts }, { model: applicant }],
      //attributes: { exclude: "password" },



    });

    // Above, are example queries 

    if (!JobData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }
    // Above, is our error function if no data is found.
    res.status(200).json(JobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above, I am just checking if i can retrive the data

module.exports = router;
