"use client";
import React from "react";
import Cont from "../Cont";
import Form from "../login/Form";
import Otp from "@/components/mobileFooter/listes/Otp";
import useRedirectOnMobile from "@/hooks/useRedirectOnMobile";

const VerifyPage = () => {
  useRedirectOnMobile("/");
  return (
    <Cont>
      <Otp />
    </Cont>
  );
};

export default VerifyPage;
