import Link from "next/link";
import React from "react";

interface Props {
  links: { name: string; href: string }[];
  style?:string
}

const SubLinks = ({ links,style }: Props) => {
  return (
    <section className={`py-4 ${style}`}>
      <div className="container">
        <div className="flex items-center gap-1">
          {links.map((link, idx) => (
            <React.Fragment key={idx}>
              {idx + 1 !== links.length ? (
                <>
                  <Link href={link.href} className="text-main">{link.name}</Link> <span className="text-main">/</span>
                </>
              ) : (
                <span className="desc-color">{link.name}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubLinks;