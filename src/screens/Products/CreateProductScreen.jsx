import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import Input from '../../components/misc/Input/Input.jsx'
import { createProduct } from '../../services/ProductService'
import CreateProductSchema from './CreateProductSchema'

const INITIAL_VALUES = {
    name: '',
    price: '',
    photos: '',
    description: '',
    isPlant: false
}

function NewProduct() {
    const {
    values, handleChange, handleBlur, handleSubmit, errors,
    isSubmitting, setSubmitting, setFieldError, setFieldValue
    } = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: onSubmit,
        validationSchema: CreateProductSchema,
        validateOnBlur: false,
        validateOnChange: false,
    })

    const navigate = useNavigate();

    function onSubmit(values) {
        // const formData = new FormData()
        // for(let value in values) {
        //     formData.append(value, values[value])
        // }

        createProduct(values)
        .then(product => {
            console.log(product, 'Entra en CREATE PRODUCT')
            navigate('/products')
        })
        .catch(err => {
            console.log(err.response.data)
            console.log("ENTRA EN ERROR ❌")

            err.response.data &&
            Object.keys(err.response.data)
             .forEach((errorKey) => {
                setFieldError(errorKey, err.response.data.errors[errorKey])
            })
        })
        .finally(() => {
        setSubmitting(false)
        })
    }

    return (
    <div className="signup container mt-5 w-50">
      <h1 className="text-center">Crear producto</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre del producto:"
          type="text"
          placeholder="Agrega el nombre del producto"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          onBlur={handleBlur} 
        />

        <Input
          label="Precio:"
          type="text"
          placeholder="Agrega el precio"
          name="price"
          id="price"
          value={values.price}
          onChange={handleChange}
          error={errors.price}
          onBlur={handleBlur} 
        />

        <Input
          label="Fotos del producto:"
          placeholder="Agregar fotos"
          type="file"
          name="images"
          id="file"
          onChange={(e) => setFieldValue('images', e.target.files[0])}
          error={errors.images}
          onBlur={handleBlur}
        />

        <Input
          label="Descripción:"
          placeholder="Agrega una pequeña descripción"
          type="text"
          name="description"
          id="description"
          value={values.description}
          onChange={handleChange}
          error={errors.description}
          onBlur={handleBlur}
        />

        <Input
          label="¿Es una planta?"
          placeholder="¿Es una planta?"
          type="checkbox"
          name="isPlant"
          id="isPlant"
          value={values.isPlant}
          onChange={handleChange}
          error={errors.isPlant}
          onBlur={handleBlur}
        />

        <button type="submit" className="btn btn-submit font-weight-bold btn-block mt-4" disabled={isSubmitting}>
          {isSubmitting ? 'Creando...' : 'Crear producto'}
        </button>
      </form>
      </div>
    )
}

export default NewProduct;