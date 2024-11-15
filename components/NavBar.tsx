import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButtom from "./CustomButtom";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-x-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link className="flex justify-center items-center" href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButtom
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
