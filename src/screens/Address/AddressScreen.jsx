import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../../components/misc/Input/Input'
import { createAddress } from '../../services/ShippingAddressService'
import AddressSchema from './AddressSchema';

const INITIAL_VALUES = {
    addressName: '',
    street: '',
    streetNumber: '',
    floor: '',
    door: '',
    city: '',
    zipCode: ''
}

function AddressForm() {
    const {
        values, handleChange, handleBlur, handleSubmit, errors,
        isSubmitting, setSubmitting, setFieldError
        } = useFormik({
            initialValues: INITIAL_VALUES,
            onSubmit: onSubmit,
            validationSchema: AddressSchema,
            validateOnBlur: false,
            validateOnChange: false,
        })

        const navigate = useNavigate();

        const { state } = useLocation()
        console.log(state)

        function onSubmit(values) {
            createAddress(values)
            .then(address => {
                console.log('Cree un address', address)

                navigate('/users/me')
            })
            .catch(err => {
                console.log(err.response.data)

                console.log("ENTRA EN ERROR ❌")

            err.response.data &&
             Object.keys(err.response.data.errors)
                .forEach((errorKey) => {
                    setFieldError(errorKey, err.response.data.errors[errorKey])
                })
            })
            .finally(() => {
                setSubmitting(false)
        })
    }

    return (
    <div className="container mt-5 w-50">
        <h1 className="text-center">Agrega una dirección</h1>
  
    <form onSubmit={handleSubmit}>
        <Input className={"w-25"}
            label="Dale nombre a esta dirección:"
            type="text"
            placeholder="Agrega un nombre a esta dirección"
            name="addressName"
            id="addressName"
            value={values.addressName}
            onChange={handleChange}
            error={errors.addressName}
            onBlur={handleBlur} 
          />

        <Input
            label="Nombre de la calle:"
            type="text"
            placeholder="Agrega la calle o avenida"
            name="street"
            id="street"
            value={values.street}
            onChange={handleChange}
            error={errors.street}
            onBlur={handleBlur} 
          />

        <Input className=''
            label="Número:"
            type="text"
            placeholder="Agrega el número"
            name="streetNumber"
            id="streetNumber"
            value={values.streetNumber}
            onChange={handleChange}
            error={errors.streetNumber}
            onBlur={handleBlur} 
          />

        <Input className=''
            label="Piso:"
            type="text"
            placeholder="Agrega el piso"
            name="floor"
            id="floor"
            value={values.floor}
            onChange={handleChange}
            error={errors.floor}
            onBlur={handleBlur} 
          />

        <Input className=''
            label="Puerta:"
            type="text"
            placeholder="Agrega la puerta"
            name="door"
            id="door"
            value={values.door}
            onChange={handleChange}
            error={errors.door}
            onBlur={handleBlur} 
          />

        <Input className=''
            label="Ciudad:"
            type="text"
            placeholder="Agrega la ciudad"
            name="city"
            id="city"
            value={values.city}
            onChange={handleChange}
            error={errors.city}
            onBlur={handleBlur} 
          />

        <Input className=''
            label="Código postal:"
            type="text"
            placeholder="Agrega la ciudad"
            name="zipCode"
            id="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            error={errors.zipCode}
            onBlur={handleBlur} 
          />
        <div className='btn-footer d-flex justify-content-center m-4'>
        <button type="submit" onClick={() => navigate('/users/address')} className="btn btn-submit btn-block font-weight-bold" disabled={isSubmitting}>
        {isSubmitting ? 'Agregando...' : 'Agregar'}
        </button>
        </div>
        </form>
     </div>
    )
}

export default AddressForm;