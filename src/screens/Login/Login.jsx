import { useFormik } from 'formik';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Input from '../../components/misc/Input';
import AuthContext from '../../contexts/AuthContext';
import { login as userLogin } from '../../services/AuthService';
import LoginSchema from './LoginSchema'

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
        <div className="Login container">
          <h1>Login</h1>
    
          <form onSubmit={handleSubmit}> 
    
            <Input
              label="Email"
              placeholder="Introduce tú email"
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
              placeholder="Write your password"
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              onBlur={handleBlur}
            />
    
            <button type="submit" className="btn btn-primary">
              {isSubmitting ? 'Loading' : 'Login'}
            </button>
          </form>
        </div>
      )
    }    

export default Login;