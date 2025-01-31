const mongoose = require("mongoose");

const { Schema } = mongoose;

userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: Buffer, required: true },
  role: { type: String, required: true, default: "user" },
  address: {
    type: Schema.Types.Mixed,
    //   street: { type: String, required: true },
    //   city: { type: String, required: true },
    //   state: { type: String, required: true },
    //   zipCode: { type: String, required: true },
  },
  name: { type: String },
  salt: { type: Buffer },
  resetPasswordToken: { type: String, default: "" },
});

const virtual = userSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    // ret.id = ret._id; // Map _id to id
    delete ret._id; // Remove _id field
  },
});
userSchema.set("toObject", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id; // Remove _id field
  },
});
exports.User = mongoose.model("User", userSchema);
