import React from "react";
import Aside from "../aside/Aside";
import Navbar from "../share/Navbar";
import Test from "../test/Test";

const Home = () => {
  return (
    <>
      <header className="border border-red-500 bg-neutral-900 h-32 w-full ">
        <Navbar />
      </header>
      <div className="flex justify-between">
        <aside className="  border border-yellow-300 bg-neutral-900 fixed top-0 mt-[126px] ">
          <Aside></Aside>
        </aside>

        <div
          className="grid grid-cols-10 grid-rows-4  border ml-[396px]  border-cyan-200 gap-2 w-[calc(100vw-394px)] h-[calc(100vh-126px)] mr-5  "
          style={{ backgroundColor: "#202425" }}
        >
          <main className="border border-blue-600 col-span-10 row-span-3 grid grid-cols-3 gap-5 grid-rows-6">
            <div class="border border-red-500 row-span-2 ">div1</div>
            <div class="border border-red-500 row-span-2">div2</div>
            <div class="border border-red-500 row-span-2">div3</div>
            <div class="border border-red-500 row-span-4 col-span-full grid grid-cols-3 grid-rows-2 gap-5">
              <div className="border border-blue-700 col-span-2 row-span-full">div1</div>
              <div className="border border-blue-700 ">div2</div>
              <div className="border border-blue-700 ">div3</div>
            </div>
          </main>
          <footer className="border border-orange-700 col-span-10">footer</footer>
        </div>
      </div>
      <Test></Test>
    </>
  );
};

export default Home;
