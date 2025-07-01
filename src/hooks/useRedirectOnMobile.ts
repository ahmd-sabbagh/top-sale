"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useRedirectOnMobile = (redirectPath: string) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth < 768) {
      router.push(redirectPath);
    }
  }, [router, redirectPath]);
};

export default useRedirectOnMobile;
