const router = require("express").Router();
const controller = require("./controller");

router.post("/", async (req, res, next) => {
  try {
    req.body.created_at = new Date();
    const result = await controller.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});



module.exports = router;
