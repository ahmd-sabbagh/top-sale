"use client";
import { Otp } from "@/components";
import { redirect, useSearchParams } from "next/navigation";
import React from "react";

const PageClone = () => {
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || null;
  if(!phone){
    redirect("/login")
  }
  return (
    <>
      <Otp phone={phone} />
    </>
  );
};

export default PageClone;
