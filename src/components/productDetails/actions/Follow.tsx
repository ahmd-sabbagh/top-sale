"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import axios from "@/lib/axios";
import SnipperButton from "@/components/sniperBtn/SniperBtn";
import { toast } from "sonner";

interface Props {
  isFollwing: boolean;
  id: string;
}

const Follow = ({ isFollwing, id }: Props) => {
  const t = useTranslations();
  const [loading, setLoading] = useState<boolean>(false);
  const [follow, setFollow] = useState<boolean>(isFollwing);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = follow
      ? `/api/unfollow-user/${id}`
      : `/api/follow-user/${id}`;

    try {
      const response = await axios.post(endpoint);
      const res = response.data;
      if (res.success) {
        toast.success(res.message);
        setFollow(!follow);
      } else {
        toast.warning(res.message);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <button
        type="submit"
        className={cn(
          "flex-c w-[108px] h-[42px] rounded text-sm border border-main-color text-main"
        )}
      >
        {loading ? (
          <SnipperButton className="text-main" />
        ) : follow ? (
          <FaCheck />
        ) : (
          t("follow")
        )}
      </button>
    </form>
  );
};

export default Follow;
