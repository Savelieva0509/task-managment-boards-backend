const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    boardId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const updStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

taskSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  title: Joi.string().required(),
  text: Joi.string().required(),
  boardId: Joi.string().required(),
  status: Joi.string().required(),
});

const schemas = {
  addSchema,
  updStatusSchema,
};

const Task = model("task", taskSchema);
module.exports = { Task, schemas };
