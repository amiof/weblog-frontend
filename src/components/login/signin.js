import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { backgroundColor } from "../../Constants/Constants";

function SignIn() {
  const loginHandler = async (values) => {
    const addr = "http://localhost:4000/user/login";
    const payload = { ...values };
    try {
      const response = await axios.post(addr, qs.stringify(payload));
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: loginHandler,
    validationSchema: yup.object({
      username: yup.string().min(4).max(10),
      password: yup.string().min(4),
    }),
  });

  return (
    <div
      className="flex justify-center items-center w-full h-full"
      style={{ backgroundColor: backgroundColor }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="w-96 h-2/6 border-2 border-blue-50 bg-gray-800 border border-gray-700 relative rounded-2xl"
      >
        <div className="mt-20">
          <label htmlFor="username" className="m-5 text-white">
            {" "}
            username :{" "}
          </label>
          <input
            type="text"
            name="username"
            {...formik.getFieldProps("username")}
            className="ml-6"
          />
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        </div>
        <div className="mt-10">
          <label htmlFor="password" className="m-5 text-white">
            {" "}
            password :{" "}
          </label>
          <input
            id="password"
            type="password"
            name="password"
            {...formik.getFieldProps("password")}
            className="ml-6"
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <div className="absolute bottom-3 flex justify-around w-full ">
          <button
            type="submit"
            className="border-solid border-2 border-gray-700 p-2 rounded-md hover:bg-blue-400 text-white"
          >
            {" "}
            submit{" "}
          </button>
          <button
            type="button"
            className="border-solid border-2 p-2 border-gray-700 rounded-md hover:bg-green-500 text-white"
          >
            <Link to="/login">login</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
