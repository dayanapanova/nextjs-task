import * as yup from 'yup';

 export const messageSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required()

})