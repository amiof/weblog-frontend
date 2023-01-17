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
    <div className="flex justify-center items-center w-full h-full  bg-gradient-to-t bg-neutral-800 from-gray-800">
      <form
        onSubmit={formik.handleSubmit}
        className="w-96 h-2/6 border-2  bg-gray-800 border-gray-700 relative rounded-lg overflow-hidden"
      >
        <span class="absolute inset-px z-10  rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-200">
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
          </div>{" "}
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
            <button type="submit" class="relative overflow-hidden rounded-lg  px-10 py-6    ">
              <span class="absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-200">
                submit
              </span>
              <span class="absolute inset-0 z-0 scale-x-[2.0]  before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-100 before:to-blue-500" />
            </button>

            <button class="relative overflow-hidden rounded-lg  px-10 py-6    ">
              <span class="absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-200">
                <Link to="/login">login</Link>
              </span>
              <span class="absolute inset-0 z-0 scale-x-[2.0]  before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-100 before:to-green-600" />
            </button>
          </div>{" "}
        </span>
        <span class="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400" />
      </form>
    </div>
  );
}

export default SignIn;
