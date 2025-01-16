const mongoose = require("mongoose");

const { Schema } = mongoose;

categorychema = new Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
});

const virtual = categorychema.virtual("id");
virtual.get(() => this._id);
categorychema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id; // Map _id to id
    delete ret._id; // Remove _id field
  },
});

exports.Category = mongoose.model("category", categorychema);
