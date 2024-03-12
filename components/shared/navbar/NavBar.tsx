import { UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";

const NavBar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-md dark:shadow-none sm:px-12 text-dark400_light700">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/Logo.png"
          alt="Logo"
          width={27}
          height={27}
        />
        <p className="h2-bold font-mono max-sm:hidden ">
          Tag<span className=" text-purple-500 ">Finity</span>{" "}
        </p>
      </Link>
      {/* Global Search */}
      <div className=" flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
