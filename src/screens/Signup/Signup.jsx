import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Input from '../../components/misc/Input';
import { createUser } from '../../services/UserService';
import SignupSchema from './SignupSchema';

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

    function onSubmit(values) {
        const formData = new FormData()

        for (let value in values) {
            formData.append(value, values[value])
        }

        createUser(formData)
        .then(user => {
            console.log(user);

            navigate('/login', { state: {
                email: values.email
            } })
        })
        .catch(err => {
            console.log(err.response.data)

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

const [form, setForm] = useState({ email: '', name: ''})

const handleOnChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

return (
    <div className="Signup container">
      <h1>Registrarse</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
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
          label="Last name"
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
          label="Phone number"
          placeholder="Add your phone number"
          name="phoneNumber"
          id="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
          onBlur={handleBlur}
        />

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Loading' : 'Submit'}
        </button>
      </form>
    </div>
)

}

export default Signup;