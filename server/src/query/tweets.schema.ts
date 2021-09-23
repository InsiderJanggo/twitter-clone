import * as yup from 'yup'

export const schema = yup.object().shape({
    content: yup.string().max(255).required().trim(),
    author: yup.number().required()
})