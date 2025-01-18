const mongoose = require("mongoose");

const { Schema } = mongoose;

cartSchema = new Schema({
  quantity: { type: Number, required: true },
  product: { type: Schema.Types.ObjectId, ref: "product", required: true },
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
});

const virtual = cartSchema.virtual("id");
virtual.get(() => this._id);
cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id; // Map _id to id
    delete ret._id; // Remove _id field
  },
});

exports.Cart = mongoose.model("cart", cartSchema);
