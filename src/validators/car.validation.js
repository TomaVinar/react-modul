import Joi from "joi";

export const carValidation = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яїЇіІёЁъ]{1,20}')).required().messages({
        'string.empty': 'поле model не може бути порожнім',
        'string.pattern.base': 'поле приймає виключно літери від 1 до 29 символів'
    }),
    price: Joi.number().min(1).max(100000).required().messages({
        'number.base': 'ціна має бути числовим значенням більша за 0 і не перевищувати 1000000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base': 'рік авто має бути числовим значенням від 1990 до теперішнього'
    })
})
