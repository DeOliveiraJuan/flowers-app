import * as Yup from 'yup';
import ERRORS from '../../constants/formErrors';

const ContactSchema = Yup.object().shape({
    name: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    lastName: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    email: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    subject: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
})

export default ContactSchema;