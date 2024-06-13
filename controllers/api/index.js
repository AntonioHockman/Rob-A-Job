const router = require("express").Router()
const jobRoutes = require("./jobRoutes.js")
const userRoutes = require("./userRoutes.js")
router.use("/job",jobRoutes)
router.use("/user",userRoutes)
module.exports = router