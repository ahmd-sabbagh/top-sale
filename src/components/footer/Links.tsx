import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
interface Props {
  data: {
    title: string;
    links: { name: string; herf: string }[];
  };
}

const Links = ({ data: { title, links } }: Props) => {
  return (
    <div>
      <h3 className="title-color text-lg font-medium">{title}</h3>
      <div className="flex flex-col gap-2 mt-4">
        {links.map((link, idx) => (
          <Link
            href={link.herf}
            key={idx}
            className="text-[#666666] flex items-center gap-1 hover:text-[#B02770] hover:-translate-x-1 transition"
          >
            <div className="ltr:rotate-180">
              <MdKeyboardDoubleArrowLeft />
            </div>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
