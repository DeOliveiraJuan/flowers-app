import * as Yup from 'yup';
import ERRORS from '../../constants/formErrors';

const AddressSchema = Yup.object().shape({
    addressName: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    street: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    streetNumber: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    floor: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    door: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    city: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
    zipCode: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED),
})

export default AddressSchema;