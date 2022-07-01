const orderModel = require("../models/order");
const { findAll, findByCondition } = require("../utils/db");

const {
  Types: { ObjectId },
} = require("mongoose");

const findAllOrder = async ({
  key,
  searchFields,
  query,
  offset,
  limit,
  fields,
  sort,
  populate,
  exclude,
}) => {
  const { data, metadata } = await findAll({
    model: orderModel,
    key,
    searchFields,
    query,
    offset,
    limit,
    fields,
    sort,
    populate,
    exclude,
  });
  return {
    data,
    metadata,
  };
};

const createOrder = async ({
  description,
  userId,
  foods,
  appName,
  store,
  driver,
}) => {
  const order = await orderModel.create({
    description,
    orderBy: userId,
    foods,
    appName,
    store,
    driver,
  });
  return order;
};

module.exports = { createOrder, findAllOrder };
