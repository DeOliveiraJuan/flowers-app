import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    name: '',
    lastName: ''
};

const onSubmit = values => {
    console.log('Form data', values)
}

const validate = values => {

    let errors = {}

    if(!values.name) {
        errors.name = 'Required'
    }

    if(!values.lastName) {
        errors.lastName = 'Required'
    }

    return errors;
}

function Login() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    //console.log('Form values', formik.values)
   console.log('Form errors', formik.errors)
    
  return (
    <div>

        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
            </div>

            <div className='form-control'>
                <label htmlFor="lastName">Last name:</label>
                <input type="text" id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} />
                {formik.errors.lastName ? <div className='error'>{formik.errors.lastName}</div> : null}
            </div>

        <button type="submit">Submit</button>
        </form> 
    </div>
  )
}

export default Login;