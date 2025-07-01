import React from "react";
import Profile from "./Profile";
import Links from "./Links";
import Logout from "./Logout";

const SideBar = () => {
  return (
    <div className="md:p-4 md:rounded md:border border-color h-fit">
      <Profile />
      <Links />
      <div className="hidden md:block">
        <Logout />
      </div>
    </div>
  );
};

export default SideBar;
