import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-8  border border-cyan-200 gap-2">
      <aside className="row-span-full col-span-2 border border-yellow-300 ">aside</aside>
      <header className="border border-red-500 col-span-8 ">heder</header>
      <main className="border border-blue-600 col-span-8 row-span-6 grid grid-cols-3 gap-5 grid-rows-6">
        <div class="border border-red-500 row-span-2 ">div1</div>
        <div class="border border-red-500 row-span-2">div2</div>
        <div class="border border-red-500 row-span-2">div3</div>
        <div class="border border-red-500 row-span-4 col-span-full grid grid-cols-3 grid-rows-2 gap-5">
          <div className="border border-blue-700 col-span-2 row-span-full">div1</div>
          <div className="border border-blue-700 ">div2</div>
          <div className="border border-blue-700 ">div3</div>
        </div>
      </main>
      <footer className="border border-orange-700 col-span-8">footer</footer>
    </div>
  );
};

export default Home;
