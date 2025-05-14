"use client";
import { notification } from "@/assets";
import Menu from "@/components/menu/Menu";
import { useClickOutside } from "@/hooks/useOutsideClick";
import Image from "next/image";
import React, { useState } from "react";
import NotificationsItems from "./NotificationsItems";

const NotificationButton = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
  });
  return (
    <div className="relative">
      <button
        type="button"
        className="flex-c w-10 h-10 rounded-full bg-[#ABABAB21]"
        onClick={() => setOpen(true)}
      >
        <Image src={notification} alt="notification-icon" loading="lazy" />
      </button>
      {open && (
        <Menu style="w-[311px]" ref={menuRef}>
          <NotificationsItems />
        </Menu>
      )}
    </div>
  );
};

export default NotificationButton;
