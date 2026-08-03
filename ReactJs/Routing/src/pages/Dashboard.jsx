import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Profile } from "./Profile";

export function Dashboard() {
  return (
    <>
      <div>
        <nav>
          <Link to="profile">Profile</Link> |{" "}
          <Link to="settings">Settings</Link>
        </nav>
      </div>
      <div className="center_div">
        <Outlet />
      </div>
    </>
  );
}
