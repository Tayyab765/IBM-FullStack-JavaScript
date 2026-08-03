import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export function Home() {
  const navigat = useNavigate();
  function navigateToContact() {
    navigat("/contact");
  }

  return (
    <>
      <div className="center_div">
        <div className="text-3xl mb-10">Home Page</div>
        <div className="flex gap-4">
          <button
            onClick={navigateToContact}
            className="bg-blue-500 p-2 rounded-lg cursor-pointer "
          >
            Contact
          </button>

          <Link to="/about">
            <button className="bg-blue-500 p-2 rounded-lg cursor-pointer ">
              About
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="bg-blue-500 p-2 rounded-lg cursor-pointer ">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
