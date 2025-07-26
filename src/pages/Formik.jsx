import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Formikk = () => {
    // const [number, setnumber] = useState(0)
    let formik= useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            password:''
        },
        onSubmit:(values)=>{
            console.log(values)
        },
        validationSchema:yup.object({
            firstName: yup.string('input your first anme').required('first name is required'),
            lastName:yup.string('input your last name').required('last name is required'),
            email:yup.string('input your email here').email('email must be valid').required('email is required'),
            password:yup.string('input your password here').required('password is required')

        })
    })

    // console.log(formik.values)
    // console.log(formik.errors)
    console.log(formik.touched)

  return (
    <div>
        <input type="text" name='firstName'  onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-control is-valid'/>
       {formik.touched.firstName &&formik.errors.firstName? <small className='text-danger'>{formik.errors.firstName}</small>:''}

        <input type="text" name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
         {formik.touched.lastName &&formik.errors.lastName? <small className='text-danger'>{formik.errors.lastName}</small>:''}

        <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
         {formik.touched.email &&formik.errors.email? <small className='text-danger'>{formik.errors.email}</small>:''}

        <input type="text" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.password &&formik.errors.password? <small className='text-danger'>{formik.errors.password}</small>:''}

        <button onClick={formik.handleSubmit} type='submit'>submit</button>
    </div>
  )
}

export default Formikk