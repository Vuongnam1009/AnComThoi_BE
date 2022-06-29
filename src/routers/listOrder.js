const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../middlewares/async");
const listOrderController = require("../controllers/listOrder");

router.get("/listOrders", asyncMiddleware(listOrderController.getAllListOrder));

router.post("/listOrders", asyncMiddleware(listOrderController.creatListOrder));

module.exports = router;
