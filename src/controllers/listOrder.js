const listOrderService = require("../services/listOrder");
const CustomError = require("../errors/CustomError");
const codes = require("../errors/code");

const creatListOrder = async (req, res) => {
  const { menuName, startAt, endAt, order } = req.body;
  const listOrder = await listOrderService.createListOrder({
    menuName,
    startAt,
    endAt,
    order,
  });
  return res.send({ status: 1, result: listOrder });
};
const getAllListOrder = async (req, res) => {
  const { sort, fields } = req.query;
  const { data, metadata } = await listOrderService.findAllListOrder({
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

module.exports = { creatListOrder, getAllListOrder };
