import React from "react";
import User from "./user/User";
import Language from "./Language";
import AddAddButton from "./AddAddButton";
import { getLocale } from "next-intl/server";
import MsgButton from "./messages/MsgButton";
import NotificationButton from "./notifications/NotificationButton";

const IconsAction = async () => {
  const lang = await getLocale();
  return (
    <div className="flex items-center gap-2 lg:gap-6 xl:gap-8">
      <NotificationButton />
      <MsgButton />
      <User />
      <AddAddButton />
      <Language lang={lang} />
    </div>
  );
};

export default IconsAction;
