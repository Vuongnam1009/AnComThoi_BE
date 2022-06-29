const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listOrderSchema = new Schema(
  {
    menuName: String,
    startAt: Date,
    endAt: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AccountModel = mongoose.model("ListOrder", listOrderSchema);
module.exports = AccountModel;
