const router = require("express").Router();
const { User, Job, Applicant } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
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
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Above is a route to get the data for a certain user and display their data on their dash board.

router.get("/employer/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include:[{ model:Job, include:[{model:Applicant, include:[{model:User, attributes: { exclude: ["password"] } }]}]}]
      
    });

    if (!userData) {
      res.status(404).json({ message: "No data found!" });
      return;
    }

    const newUserData = userData.get({ plain: true });

    //res.status(200).json(newUserData);


    res.status(200).render("employerdash", {
      newUserData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Above is a route to get the data for a certain user and display their data on their employer board.



router.get("/employers/create", async (req, res) => {
  try {
  
    res.status(200).render("createjob", {
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//Above is a route to get the data us the page the employer uses to create a job.

















// creates a new user
/*router.post('/users', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

    res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'});
  }
});


// logging in
router.post('/users', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logging out
router.post('/users', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});*/

module.exports = router;
