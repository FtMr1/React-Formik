import React from "react";
import { useFormik } from "formik";
import { basicSchemas } from "../schemas";

const onSubmit = async (values,actions)=>{
    console.log(values);
    console.log(actions)

    await new Promise((resolve)=>{
      setTimeout(resolve,1000)
    });
    actions.resetForm()

}

function GeneralForm() {
  const { values, errors, handleChange, isSubmitting, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password:"",
      confirmPassword:"",
    },
    validationSchema:basicSchemas,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input onChange={handleChange} type="email" value={values.emailemail} id="email" className={errors.email ? 'input-error' : ''}/>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input onChange={handleChange} type="number" value={values.age} id="age" />
        {errors.age && <p className="error">{errors.age}</p>}

      </div>
      <div className="inputDiv">
        <label>Şifre</label>
        <input onChange={handleChange} type="password" id='password' value={values.password}  />
        {errors.password && <p className="error">{errors.password}</p>}

      </div>
      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input onChange={handleChange} type="password" value={values.confirmPassword} id="confirmPassword" />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      </div>
          <button disabled={isSubmitting} type="submit">
            kaydet
          </button>

    </form>
  );
}

export default GeneralForm;
