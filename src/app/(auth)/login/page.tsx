"use client"
import React from "react";
import Form from "./Form";
import Cont from "../Cont";
import useRedirectOnMobile from "@/hooks/useRedirectOnMobile";

const LoginPage = () => {
  useRedirectOnMobile("/");
  return (
    <Cont>
      <Form />
    </Cont>
  );
};

export default LoginPage;
