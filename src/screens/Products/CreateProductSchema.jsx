import * as Yup from 'yup';
import ERRORS from '../../constants/formErrors'

const CreateProductSchema = Yup.object().shape({
    name: Yup
    .string()
    .required(ERRORS.ERROR_REQUIRED),
    price: Yup
    .number()
    .required(ERRORS.ERROR_REQUIRED),
    images: Yup
    .string()
    .required(ERRORS.ERROR_REQUIRED),
    description: Yup
    .string()
    .required(ERRORS.ERROR_REQUIRED),
    isPlant: Yup
    .boolean()
})

export default CreateProductSchema;