const listOrder = require("../models/ListOrder");
const { findAll, findByCondition } = require("../utils/db");

const {
  Types: { ObjectId },
} = require("mongoose");

const createListOrder = async ({ menuName, startAt, endAt, order }) => {
  const listOrder = await listOrder.create({ menuName, startAt, endAt, order });
  return listOrder;
};
const findAllListOrder = async ({
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
    model: listOrder,
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

module.exports = { createListOrder, findAllListOrder };
