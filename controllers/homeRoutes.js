const router = require("express").Router();
const { User, Job, Applicant } = require("../models");

//const withAuth = require('../utils/auth');


router.get("/", async (req, res) => {
  try {
    const userData = await Job.findAll();

    if (!userData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }
const jobs = userData.map((job)=>job.get({plain:true}))
console.log(jobs)
    res.render("homepage",{jobs})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const JobData = await Job.findByPk(req.params.id, {
       /*include: [
        {
          model: applicant,
          include: [{ model: User, attributes: { exclude: "password" } }],
        }, // Include the User model for each applicant
      ],

      attributes: { exclude: "password" }*/

      include: [
        {  model: User },{model: Applicant, include:[{
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

router.get("/login", (req,res)=>{
  try {
    res.render("login")
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }
})
router.get("/signup", (req,res)=>{
  try {
    res.render("signup")
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }
})
router.get("/admin", (req,res)=>{
  try {
    res.render("admin")
  } catch (error) {
    console.error(error)
    res.status(500).json()
  }
})

// Above, I am just checking if i can retrive the data

module.exports = router;
