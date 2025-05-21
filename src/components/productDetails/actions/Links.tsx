
import Link from "next/link";
import React from "react";

const Links = () => {
  const links = [
    {
      href: "/all-ads",
      name: "إلكترونيات",
    },
    {
      href: "/all-ads",
      name: "موبايلات",
    },
    {
      href: "/all-ads",
      name: "آيفون",
    },
    {
      href: "/all-ads",
      name: "تخفيضات",
    },
    {
      href: "/all-ads",
      name: "إلكترونيات",
    },
  ];
  return (
    <div className="flex items-center gap-2 mt-6">
      {links.map((link, idx) => (
        <Link
          href={link.href}
          key={idx}
          className="block not-last:pe-2 not-last:border-e border-color desc-color text-sm underline"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Links;
