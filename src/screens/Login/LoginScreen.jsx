import { useFormik } from 'formik';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Input from '../../components/misc/Input/Input';
import AuthContext from '../../contexts/AuthContext';
import { login as userLogin } from '../../services/AuthService';
import LoginSchema from './LoginSchema'
import './LoginScreen.css'
import { Link } from 'react-router-dom'

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
          <p className='text-center redirect'>¿Aún no tienes cuenta? Pincha<Link to='/signup' className='dropdown-item inline'><u>aquí.</u></Link></p>
    
          <form onSubmit={handleSubmit}> 
    
            <Input
              label="Email:"
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
              label="Contraseña:"
              placeholder="Introduce tu contraseña"
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              onBlur={handleBlur}
            />

            <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Recordar mis datos
                </label>
              </div>

            <div>
            <Link to='/forgotpassword'><a className="mt-3" href="/forgotpassword">¿Olvidaste tú contraseña?</a></Link>
            </div>

            <div className='btn-footer d-flex justify-content-center my-4'>
            <button type="submit" className="btn btn-submit font-weight-bold btn-block">
              {isSubmitting ? 'Cargando...' : 'Entrar'}
            </button>
            </div>
          </form>
        </div>
      )
    }    

export default Login;

