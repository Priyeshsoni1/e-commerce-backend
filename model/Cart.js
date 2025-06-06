const mongoose = require("mongoose");

const { Schema } = mongoose;

const cartSchema = new Schema({
  quantity: { type: Number, required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  size: { type: Schema.Types.Mixed },
  color: { type: Schema.Types.Mixed },
});

const virtual = cartSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    // ret.id = ret._id; // Map _id to id
    delete ret._id; // Remove _id field
  },
});

exports.Cart = mongoose.model("Cart", cartSchema);
