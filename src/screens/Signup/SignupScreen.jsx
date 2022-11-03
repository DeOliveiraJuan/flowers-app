import React from 'react'
import { useFormik } from 'formik';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Input from '../../components/misc/Input/Input';
import { createUser } from '../../services/UserService';
import SignupSchema from './SignupSchema';
import './SignupScreen.css'

const INITIAL_VALUES = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
}

function Signup() {
    const {
    values, handleChange, handleBlur, handleSubmit, errors,
    isSubmitting, setSubmitting, setFieldError
    } = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: onSubmit,
        validationSchema: SignupSchema,
        validateOnBlur: false,
        validateOnChange: false,
    })

    const navigate = useNavigate();

    const { state } = useLocation();
    console.log(state)

    function onSubmit(values) {
        createUser(values)
        .then(user => {
            console.log('ENTRA EN CREATEUSER 👍🏻', user);

            navigate('/login', { state: {
                email: values.email
            } })

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
    <div className="signup container mt-5 w-25">
      <h1 className="text-center">Registrate</h1>
      <p className='text-center'>¿Ya estás registrado? Pincha<Link to='/login' className='dropdown-item inline'><u>aquí.</u></Link></p>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre:"
          type="text"
          placeholder="Add user name"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          onBlur={handleBlur} 
        />

        <Input
          label="Apellido:"
          type="text"
          placeholder="Add user last name"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
          onBlur={handleBlur} 
        />

        <Input
          label="Email"
          placeholder="Add email"
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          onBlur={handleBlur}
        />

        <Input
          label="Password"
          placeholder="Add password"
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          onBlur={handleBlur}
        />

        <Input
          label="Número de teléfono"
          placeholder="Add your phone number"
          name="phoneNumber"
          id="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
          onBlur={handleBlur}
        />

        <button type="submit" className="btn btn-submit font-weight-bold btn-block mt-4" disabled={isSubmitting}>
          {isSubmitting ? 'Cargando...' : 'Registrarme'}
        </button>
      </form>
      </div>
)
}

export default Signup;