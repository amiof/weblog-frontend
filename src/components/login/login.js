import React from 'react'
import {useFormik} from "formik"






function Login() {
 const formik=useFormik({
    initialValues:{
      email : '',
    },
    onSubmit: values=>{
      alert(JSON.stringify(values,null,2))
    }
  })

 
  return (
    <form onSubmit={formik.handleSubmit}>
      <label >email Adress </label> 
      <input name="email" type="email" onChange={formik.handleChange} 
        value={formik.values.email  }

        />
  <button type="submit">submit</button>

    </form> 
  )
}
export default Login

