import { useFormik } from 'formik';
import {  React, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Input from '../../components/misc/Input/Input';
import AuthContext from '../../contexts/AuthContext';
import { login as userLogin } from '../../services/AuthService';
import LoginSchema from './LoginSchema'
import './LoginScreen.css'

function Login() {
    const { state } = useLocation()
    const { login } = useContext(AuthContext)

    const INITIAL_VALUES = {
        email: (state && state.email) || '',
        password: ''
    }

    const {
        values, handleChange, handleBlur, handleSubmit, errors,
        isSubmitting, setSubmitting, resetForm
    } = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: onSubmit,
        validationSchema: LoginSchema,
        validateOnBlur: false,
        validateOnChange: false,
    })

    function onSubmit(values) {
        userLogin(values)
        .then(({ accessToken }) => {
            login(accessToken)
            setSubmitting(false)
            resetForm()
        })
    }

    return (
        <div className="container mt-5 mb-2 w-25">
          <h1 className='text-center'>Login</h1>
          <p className='text-center'>¿Aún no tienes cuenta? Pincha <a clasName="" href="*">aquí.</a></p>
    
          <form onSubmit={handleSubmit}> 
    
            <Input 
              label="Email"
              placeholder="Introduce tu email"
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
              placeholder="Introduce tu contraseña"
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              onBlur={handleBlur}
            />

            <a clasName="" href="*">¿Olvidaste tu contraseña?</a>
    
            <button type="submit" className="btn btn-submit font-weight-bold btn-block mt-4">
              {isSubmitting ? 'Loading' : 'Login'}
            </button>
          </form>
        </div>
      )
    }    

export default Login;