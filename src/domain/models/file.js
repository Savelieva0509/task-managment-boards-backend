const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");

const fileSchema = new Schema(
  {
    name: String,
    description: String,
    size: Number,
    extension: String,
    url: String,
  },
  { versionKey: false, timestamps: true }
);

fileSchema.post("save", handleMongooseError);

const File = model("file", fileSchema);

module.exports = File;
