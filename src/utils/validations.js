import Joi from "joi";

export const schemaValidate = Joi.object({
  task: Joi.string().required().min(3).max(200).messages({
    "string.empty": "O campo de tarefa não pode estar vazio",
    "string.min": "O campo de tarefa deve ter pelo menos {#limit} caracteres",
    "string.max": "O campo de tarefa deve ter no máximo {#limit} caracteres",
    }),
});
