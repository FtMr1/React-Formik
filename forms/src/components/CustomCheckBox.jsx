import { useField } from 'formik'
import React from 'react'

const CustomCheckBox = ({label, ...props}) => {
 const [field , meta] = useField(props);
console.log(field);
console.log(meta);
  return (
    <>
    <div className='checkbox'>
    <label >{label}</label>
    <input {...field} {...props}  className={meta.error ? 'input-error ' : ''}/>
    <span>Kullanım koşulları kabul ediyorum.</span>
    {meta.error && <div className='error'>{meta.error}</div>}
    </div>
    </>
  )
}

export default CustomCheckBox