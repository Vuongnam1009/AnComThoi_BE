const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;

const listOrderSchema = new Schema(
  {
    menuName: String,
    startAt: Date,
    endAt: Date,
    order: [
      {
        type: ObjectId,
        ref: "Order",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AccountModel = mongoose.model("ListOrder", listOrderSchema);
module.exports = AccountModel;
