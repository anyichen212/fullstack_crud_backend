const router = require("express").Router();

router.use("/campus", require("./campus"));
router.use("/student", require("./student"));

//404 handling
router.use((req, res, next) => {
    const error = new Error("404 Not Found");
    error.status = 404;
    next(error);
  });
  
module.exports = router;