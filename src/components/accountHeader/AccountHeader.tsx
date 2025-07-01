import React from "react";
import Profile from "./Profile";
import ProfileInfo from "./ProfileInfo";
import Share from "./Share";

const AccountHeader = () => {
  return (
    <div>
      <div>
        <Profile />
        <ProfileInfo />
        <Share />
      </div>
    </div>
  );
};

export default AccountHeader;
