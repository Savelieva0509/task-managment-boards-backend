const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const validStatusValues = ["to do", "in progress", "done"];

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
    status: {
      type: String,
      required: true,
      enum: validStatusValues,
    },
    boardId: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const updStatusSchema = Joi.object({
  status: Joi.string().valid(...validStatusValues).required(),
});

taskSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  title: Joi.string().required(),
  text: Joi.string().required(),
  status: Joi.string().required(),
  boardId: Joi.string().required(),
});

const schemas = {
  addSchema,
  updStatusSchema,
};

const Task = model("task", taskSchema);

module.exports = { Task, schemas };
