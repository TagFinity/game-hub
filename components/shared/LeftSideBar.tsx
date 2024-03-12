"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <section
      className="background-light900_dark200 light-border stickey left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 
    dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar"
    >
      <div className="flex flex-1 flex-col gap-10">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              href={item.route}
              key={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={28}
                height={28}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"} `}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-5">
        <SignedOut>
          <Link href="/sign-in">
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-3xl px-4 py-3 shadow-none ">
              <span className="primary-text-gradient">Sign In</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-3xl px-4 py-3 shadow-none text-dark400_light900">
              Sign Up
            </Button>
          </Link>
        </SignedOut>
      </div>
      <div>
        <SignedIn>
          <SignOutButton>
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-3xl px-4 py-3 shadow-none">
              <span className="primary-text-gradient">Sign Out</span>
            </Button>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSideBar;
