import React from "react";
import { Link } from "react-router-dom";

export function Contact() {
  return (
    <>
      <div className="center_div">
        <div className="text-3xl mb-10">Contact</div>
        <div className="flex gap-4">
          <Link to="/">
            <button className="bg-blue-500 p-2 rounded-lg cursor-pointer ">
              Home
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-blue-500 p-2 rounded-lg cursor-pointer ">
              About
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
