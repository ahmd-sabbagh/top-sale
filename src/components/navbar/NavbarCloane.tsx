import { logo } from "@/assets";
import Image from "next/image";
import React from "react";
import Search from "./Search";
import IconsAction from "./IconsAction";
import Link from "next/link";


const NavbarCloane = () => {


  return (
    <section className="bg-[#fbfbfb] md:bg-transparent">
      <div className="py-4 md:py-8">
        <div className="container">
          <div className="flex items-center justify-between md:justify-center md:gap-6 lg:gap-8 xl:gap-12">
            <Link href={"/"} className="w-[100px] lg:w-[150px] xl:w-[200px]">
              <Image src={logo} alt="logo" priority />
            </Link>
            <div className="hidden md:block md:grow">
              <Search />
            </div>
            <div>
              <IconsAction />
            </div>
          </div>
          <div className="md:hidden mt-4">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarCloane;
