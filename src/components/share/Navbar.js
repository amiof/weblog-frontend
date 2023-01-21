import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-screen p-5 ">
      <div className=" bg-gray-800 w-full h-20 rounded-2xl border border-gray-700 sticky top-0 mr-10 z-50 ">
        <div className="flex justify-between w-full h-full items-center">
          <div className="ml-10 ">
            <span className="text-gray-400 ml-8 hover:text-white hover:border-b-yellow-300 hover:border-b-2 p-2">
              مقالات
            </span>
            <span className="text-gray-400 ml-8 hover:text-white hover:border-b-yellow-300 hover:border-b-2 p-2">
              نویسندگان
            </span>
            <Link to="/signIn">
              <span className="text-gray-400 ml-8 hover:text-white hover:border-b-yellow-300 hover:border-b-2 p-2">
                ورود
              </span>
            </Link>
            <Link to="/login">
              <span className="text-gray-400 ml-8 hover:text-white hover:border-b-yellow-300 hover:border-b-2 p-2">
                ثبت نام
              </span>
            </Link>
            <span className="text-gray-400 ml-8  hover:text-white hover:border-b-yellow-300 hover:border-b-2 p-2">
              درباره ی ما
            </span>
            <span></span>
            <span></span>
          </div>
          <div className="mr-10 text-white">logo</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
