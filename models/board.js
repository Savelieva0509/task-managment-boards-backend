const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

boardSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  title: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Board = model("board", boardSchema);

module.exports = { Board, schemas };
