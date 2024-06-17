const router = require("express").Router();
const { User, Job, Applicant,Comment } = require("../../models");
const withAuth = require('../../utils/auth');

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
      userId
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
      include:[{ model:Job, include:[{model:Applicant, include:[{model:User, attributes: { exclude: ["password"] } }]}]}]
      
    });

    if (!userData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newUserData = userData.get({ plain: true });

    


    res.status(200).render("employerdash", {
      newUserData,
      userId
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
      userId
      
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
    
    const userData = req.body 
    // Above, we attach the body of the request to a variable 

    const newUser = await User.create(userData)
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



router.post('/comment', withAuth, async (req, res) => {
  
  try {

    const comment_text = req.body.comment_text
    const job_id = req.body.job_id
    const  user_id= req.session.userId;
    // Above, we attach the body of the request to a variable 

      console.log(comment_text);
      console.log(job_id);
      console.log(user_id);

    if(!comment_text|| !job_id){
      res
        .status(400)
        .json({ message: "No data found" });
      return;
    };



    const newComment = await Comment.create({comment_text,job_id,user_id})


    res.status(200).json("New Comment Created");


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }









})















router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Above, is our log out route for all users. 












module.exports = router;
