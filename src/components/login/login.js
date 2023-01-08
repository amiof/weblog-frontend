import { useFormik } from "formik"
import * as yup from "yup"
import { Link } from 'react-router-dom'
import axios from "axios"
import qs from "qs"
function Login() {

  const registerHandler = async (values, { setSubmitting }) => {
    const payload = { ...values }
    const address = "http://127.0.0.1:4000/user/signin"
    console.log(payload)
    try {
      const response = await axios.post(address, qs.stringify(payload))
      console.log(response.data)

    } catch (errors) {
      console.log(errors)
    } finally {
      setSubmitting(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      username: "",
      password: ""
    },
    onSubmit: registerHandler,
    validationSchema: yup.object({
      username: yup.string().max(10).min(4),

      password: yup.string().min(4),
      email: yup.string().email(),

    })
  })


  return (
    <div className="h-screen w-screen bg-gray-50 flex justify-center items-center" >
      <div className='w-1/2 h-4/6 flex justify-center items-center ' >

        <form onSubmit={formik.handleSubmit} className="bg-gray-100 flex flex-col h-full w-80 border  border-black m-5 rounded-2xl relative">
          <div className='mt-20 ml-5'>
            <label htmlFor='email' className='' >email :</label>
            <input id='email' name="email" type="email" onChange={formik.handleChange}
              value={formik.values.email} className="ml-5" />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          </div>
          <div className='mt-10 ml-5' >

            <label htmlFor='username' >username </label>
            <input id='username' name="username" type="text" onChange={formik.handleChange}
              value={formik.values.username} onBlur={formik.handleBlur} />
            {formik.errors.username ? <div>{formik.errors.username}</div> : null}

          </div>
          <div className='mt-10 ml-5' >

            <label htmlFor='password' >password </label>
            <input id='password' name="password" type="password"
              {...formik.getFieldProps("password")} />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

          </div>
          <div className='absolute bottom-6 flex justify-around w-full' >
            <button type="submit">submit</button>
            <button><Link to="/signIn">sign in</Link></button>
          </div>
        </form>

      </div>
    </div>
  )
}
export default Login

