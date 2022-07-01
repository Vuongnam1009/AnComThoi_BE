const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const asyncMiddleware = require("../middlewares/async");
const orderController = require("../controllers/order");

router.get("/orders", auth, asyncMiddleware(orderController.getOrderByUser));
router.post("/orders", auth, asyncMiddleware(orderController.creatOrder));

module.exports = router;
