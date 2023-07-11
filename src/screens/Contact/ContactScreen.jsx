import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Input from "../../components/misc/Input/Input";
import { createCustomersContacts } from "../../services/ContactService";
import ContactSchema from "./ContactSchema";
import "./ContactScreen.css"

const INITIAL_VALUES = {
    name: "",
    lastName: "",
    email: "",
    subject: "",
  };
  function ContactForm() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      errors,
      isSubmitting,
      setSubmitting,
      setFieldError,
    } = useFormik({
      initialValues: INITIAL_VALUES,
      onSubmit: onSubmit,
      validationSchema: ContactSchema,
      validateOnBlur: false,
      validateOnChange: false,
    });
  
   // const navigate = useNavigate();
  
    function onSubmit(values) {
      console.log(values);
      createCustomersContacts(values)
        .then((customerContact) => {
          console.log("Cree un contacto de usuario", customerContact);
  
          //navigate("/users/me");
        })
        .catch((err) => {
          console.log(err.response.data);
  
          console.log("ENTRA EN ERROR ❌");
  
          err.response.data &&
            Object.keys(err.response.data.errors).forEach((errorKey) => {
              setFieldError(errorKey, err.response.data.errors[errorKey]);
            });
        })
        .finally(() => {
          setSubmitting(false);
        });
    }

    return (
        <div className="container mt-5 w-50">
        <h1 className="text-center">How can we help you?</h1>
  
        <form onSubmit={handleSubmit}>
          <Input
            className=""
            label="Nombre:"
            type="text"
            placeholder="Nombre"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            onBlur={handleBlur}
          />
  
          <Input
            className=""
            label="Apellido:"
            type="text"
            placeholder="Apellido"
            name="lastName"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName}
            onBlur={handleBlur}
          />
  
          <Input
            className=""
            label="Email:"
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            onBlur={handleBlur}
            style={{width: 20 }}
          />
  
          <Input
            className=""
            label="Asunto:"
            type="text"
            placeholder="Comentanos un poco"
            name="subject"
            id="subject"
            value={values.subject}
            onChange={handleChange}
            error={errors.subject}
            onBlur={handleBlur}
          />
  
          <div className="btn-footer d-flex justify-content-center m-4">
            <button
              type="submit"
              className="btn btn-submit btn-block font-weight-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  export default ContactForm;