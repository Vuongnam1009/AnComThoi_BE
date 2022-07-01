const orderService = require("../services/order");
const CustomError = require("../errors/CustomError");
const codes = require("../errors/code");

const getOrderByUser = async (req, res) => {
  const { user } = req;
  const { sort, fields } = req.query;
  const { data, metadata } = await orderService.findAllOrderByUser({
    userId: user._id,
    sort,
    fields,
  });
  return res.send({
    status: 1,
    result: {
      data,
      metadata,
    },
  });
};

const creatOrder = async (req, res) => {
  const data = req.body;
  const { user } = req;
  const order = await orderService.createOrder({
    ...data,
    userId: user._id,
  });
  return res.send({ status: 1, result: order });
};

module.exports = { creatOrder, getOrderByUser };
