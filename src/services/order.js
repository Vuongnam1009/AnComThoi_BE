const orderDao = require("../daos/order");
const code = require("../errors/code");
const CustomError = require("../errors/CustomError");

const createOrder = async ({
  description,
  userId,
  foods,
  appName,
  store,
  driver,
}) => {
  const order = await orderDao.createOrder({
    description,
    userId,
    foods,
    appName,
    store,
    driver,
  });

  return order;
};
const findAllOrderByUser = async ({ userId, sort, fields }) => {
  const { data, metadata } = await orderDao.findAllOrder({
    fields,
    sort,
    query: { orderBy: userId },
  });
  return { data, metadata };
};

module.exports = { createOrder, findAllOrderByUser };
