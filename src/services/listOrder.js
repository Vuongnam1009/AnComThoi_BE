const listOrderDao = require("../daos/listOrder");
const code = require("../errors/code");
const CustomError = require("../errors/CustomError");

const createListOrder = async ({ menuName, startAt, endAt }) => {
  const listOrder = await listOrderDao.createListOrder({
    menuName,
    startAt,
    endAt,
  });

  return listOrder;
};
const findAllListOrder = async ({ sort, fields }) => {
  const { data, metadata } = await listOrderDao.findAllListOrder({
    sort,
    fields,
  });

  return { data, metadata };
};

module.exports = { createListOrder, findAllListOrder };
