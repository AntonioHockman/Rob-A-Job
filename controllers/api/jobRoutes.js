const router = require('express').Router();
const { Job }  = require('../../models');


router.post('/jobs', async (req, res) => {
    // create a new job
    try {
      const jobData = await Job.create(req.body);
      res.status(200).json(jobData);
    } catch (error) {
      res.status(500).json({message: 'Internal Server Error'});
    }
  });
  
router.put('/jobs/:id', async (req, res) => {
  // update a job by its `id` value
  try {
    const jobData = await Job.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    if (!jobData) {
      res.status(404).json({message: 'No job with that id'});
      return;
    }

    res.status(200).json(jobData);
  } catch (error) {
    res.status(500).json({message: 'Internal Server Error'});
  }
});
  
router.delete('/jobs/:id', async (req, res) => {
  // delete a job by its `id` value
  try {
    const jobData = await Job.destroy({
      where: {
        id: req.params.id,
      }
    })

    if (!jobData) {
      res.status(404).json({message: 'No job with that id'});
      return;
    }

    res.status(200).json(jobData);
  } catch (error) {
    res.status(500).json({message: 'Internal Server Error'});
  }
});


  module.exports = router;
  