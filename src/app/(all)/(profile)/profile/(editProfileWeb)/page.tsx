import React from "react";
import ProfileImage from "../../_components/ProfileImage";
import Form from "../../_components/Form";

const EditProfilePage = () => {
  return (
    <div className="hidden md:block">
      <ProfileImage />
      <Form />
    </div>
  );
};

export default EditProfilePage;
