const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;

const orderSchema = new Schema(
  {
    description: String,
    orderBy: {
      type: ObjectId,
      ref: "User",
    },
    foods: [
      {
        foodId: String,
        name: String,
        image: String,
        price: Number,
      },
    ],
    appName: String,
    totalCharge: Number,
    totalPaid: Number,
    payer: ObjectId,
    store: { name: String, address: String },
    driver: {
      name: String,
      phoneNumber: String,
      bikeBranch: String,
      bikeNumber: String,
    },
    donate: [{ donor: String, amount: Number }],
    paymentHistory: [],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AccountModel = mongoose.model("Order", orderSchema);
module.exports = AccountModel;
