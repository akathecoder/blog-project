import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faDribbble,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="py-28 px-52 bg-background-footer">
      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center">
        {/* Logo */}
        <div className="">
          <h1 className="text-3xl">
            Coding Blog
          </h1>
        </div>

        {/* Links */}
        <div>
          <h1 className="text-xl">
            Footer Column
          </h1>
          <div className="mt-4 font-light">
            <h2>Latest Posts</h2>
            <h2>Latest Posts</h2>
            <h2>Latest Posts</h2>
          </div>
        </div>

        <div>
          <h1 className="text-xl">
            Footer Column
          </h1>
          <div className="mt-4 font-light">
            <h2>Latest Posts</h2>
            <h2>Latest Posts</h2>
            <h2>Latest Posts</h2>
          </div>
        </div>

        <div>
          <h1 className="text-xl">
            Footer Column
          </h1>
          <div className="mt-4 font-light">
            <h2>Latest Posts</h2>
            <h2>Latest Posts</h2>
            <h2>Latest Posts</h2>
          </div>
        </div>

        {/*  */}
        {/*  */}
      </div>

      <div className="py-10">
        <hr />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 py-6 text-gray-700">
        <FontAwesomeIcon
          icon={faFacebookF}
          size="lg"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="lg"
        />
        <FontAwesomeIcon
          icon={faDribbble}
          size="lg"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
        />
      </div>

      {/* Declaration */}
      <div className="text-center text-gray-500">
        <p>
          Coding Blog © Copyright 2021.
          All rights reserved.
        </p>

        <p>
          With a commitment to quality
          content for our community.
        </p>
      </div>
    </div>
  );
}

export default Footer;
