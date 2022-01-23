import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яЇїЁёІі]{1,20}$')).required().messages({
        'string.empty': 'model значення не може бути порожнім',
        'string.pattern.base': '"model" складається лише з літер, від 1 до 20 символів'
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.base': 'Ціна - це числове значення від 1 до 1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Рік може приймати значення від 1990 року до сьогодні'
    })
})