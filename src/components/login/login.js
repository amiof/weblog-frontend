import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { backgroundColor } from "../../Constants/Constants";
function Login() {
  const registerHandler = async (values, { setSubmitting }) => {
    const payload = { ...values };
    const address = "http://localhost:4000/user/signin";
    console.log(payload);
    try {
      const response = await axios.post(address, qs.stringify(payload));
      console.log(response);
    } catch (errors) {
      console.log(errors);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit: registerHandler,
    validationSchema: yup.object({
      username: yup.string().max(10).min(4),

      password: yup.string().min(4),
      email: yup.string().email(),
    }),
  });

  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="w-1/2 h-4/6 flex justify-center items-center ">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-gray-800 flex flex-col h-full w-80  m-5 rounded-2xl relative border border-gray-700"
        >
          <div className="mt-20 ml-5">
            <label htmlFor="email" className="text-white">
              email :
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="ml-5"
            />
            {formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
          </div>
          <div className="mt-10 ml-5 ">
            <label htmlFor="username" className="text-white">
              username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username ? (
              <div className="text-red-500">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="mt-10 ml-5 ">
            <label htmlFor="password" className="text-white">
              password{" "}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="absolute bottom-6 flex justify-around w-full  text-white">
            <button
              type="submit"
              className="hover:bg-green-600 border border-gray-700 p-2 rounded-lg"
            >
              submit
            </button>
            <button className="hover:bg-blue-500 border border-gray-700 p-2 rounded-lg">
              <Link to="/signIn" className="text-white">
                sign in
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
