import React from "react";

function Navbar() {
  return (
    <>
      <header className="bg-white pt-6 align-middle -ml-2 font-display">
        {/* Website Logo, Search & Log in Options */}
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold ml-16">
            Coding Blog
          </h1>
        </div>
      </header>
      {/* Different Topics */}
      <div className="my-6 sticky top-0 bg-white py-6 align-middle font-display font-medium">
        <ul className="flex justify-around text-lg text-gray-500 ">
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
