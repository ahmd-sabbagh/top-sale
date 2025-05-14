import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const NotificationsItems = () => {
  const msgData = [
    "شكراً لاستخدامك منصتنا. سيتم مراجعة الإعلان خلال دقائق قليلة، وإذا تم اعتماده، سيظهر في نتائج البحث فورًا.",
    "شكراً لاستخدامك منصتنا. سيتم مراجعة الإعلان خلال دقائق قليلة، وإذا تم اعتماده، سيظهر في نتائج البحث فورًا.",
    "شكراً لاستخدامك منصتنا. سيتم مراجعة الإعلان خلال دقائق قليلة، وإذا تم اعتماده، سيظهر في نتائج البحث فورًا.",
    "شكراً لاستخدامك منصتنا. سيتم مراجعة الإعلان خلال دقائق قليلة، وإذا تم اعتماده، سيظهر في نتائج البحث فورًا.",
    "شكراً لاستخدامك منصتنا. سيتم مراجعة الإعلان خلال دقائق قليلة، وإذا تم اعتماده، سيظهر في نتائج البحث فورًا.",
  ];
  return (
    <div className="max-h-[300px] overflow-y-scroll h-scroll">
      {msgData.map((noti, idx) => (
        <div
          key={idx}
          className="py-3 first:pt-0 border-color border-b last:border-b-0 ltr:hover:translate-x-1 rtl:hover:-translate-x-1 transition"
        >
          <p className="title-color line-clamp-2 text-xs">{noti}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsItems;
