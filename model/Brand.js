const mongoose = require("mongoose");

const { Schema } = mongoose;

brandchema = new Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
});

const virtual = brandchema.virtual("id");
virtual.get(() => this._id);
brandchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id; // Map _id to id
    delete ret._id; // Remove _id field
  },
});

exports.Brand = mongoose.model("brand", brandchema);
