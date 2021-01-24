import React from "react";

function Navbar() {
  return (
    <>
      <header className="bg-white pt-6 align-middle font-display xl:px-52">
        {/* Website Logo, Search & Log in Options */}
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold ml-16">
            Coding Blog
          </h1>
        </div>
      </header>

      {/* Different Topics */}
      <div className="my-6 sticky top-0 bg-white pt-2 pb-4 md:py-6 font-display font-medium lg:px-52 overflow-x-scroll break-words css-no-scrollbar">
        <ul className="flex flex-nowrap whitespace-nowrap px-10 gap-8 lg:justify-evenly md:text-lg text-gray-500 ">
          <li>Home</li>
          <li>UI/UX Design</li>
          <li>Web Development</li>
          <li>Typography</li>
          <li>Freelancing</li>
          <li>Lifestyle</li>
          <li>About Page</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
