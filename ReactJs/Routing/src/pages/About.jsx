import React from "react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <div className="center_div">
        <div className="text-3xl mb-10">About Page</div>
        <div className="flex gap-4">
          <Link to="/">
            <button className="bg-blue-500 p-2 rounded-lg cursor-pointer ">
              Home
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-blue-500 p-2 rounded-lg cursor-pointer ">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
