"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Follow = () => {
  const t = useTranslations();
  const [follow, setFollow] = useState(false);
  return (
    <button
      type="button"
      className={cn(
        "flex-c w-[108px] h-[42px] rounded text-sm border border-main-color text-main"
      )}
      onClick={() => setFollow(!follow)}
    >
      {follow ? <FaCheck /> : t("follow")}
    </button>
  );
};

export default Follow;
