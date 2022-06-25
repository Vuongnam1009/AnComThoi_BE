const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
    avatar: String,
    dob: Date,
    phoneNumber: String,
    urlFacebook: String,
    urlYoutube: String,
    urlWebsite: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AccountModel = mongoose.model("User", userSchema);
module.exports = AccountModel;
