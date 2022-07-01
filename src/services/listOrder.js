const listOrderDao = require("../daos/listOrder");
const code = require("../errors/code");
const CustomError = require("../errors/CustomError");

const createListOrder = async ({ menuName, startAt, endAt, order }) => {
  const listOrder = await listOrderDao.createListOrder({
    menuName,
    startAt,
    endAt,
    order,
  });

  return listOrder;
};
const findAllListOrder = async ({ sort, fields }) => {
  const { data, metadata } = await listOrderDao.findAllListOrder({
    sort,
    fields,
    populate: ["order"],
  });

  return { data, metadata };
};

module.exports = { createListOrder, findAllListOrder };
