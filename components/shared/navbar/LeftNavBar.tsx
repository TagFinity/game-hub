"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LeftNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // const signout = () => {
  //   localStorage.removeItem("clerk-db-jwt");
  // };

  return (
    <section className="hidden h-full min-w-[15%] flex-col gap-6 pt-24 sm:flex ">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <div key={item.route}>
            <Link
              href={item.route}
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
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </div>
        );
      })}

      <div className="flex flex-col gap-5">
        <SignedOut>
          <Link href="/sign-in">
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-3xl px-4 py-3 shadow-none mx-5">
              <span className="primary-text-gradient">Sign In</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-3xl px-4 py-3 shadow-none mx-5 text-dark400_light900">
              Sign Up
            </Button>
          </Link>
        </SignedOut>
      </div>
      <div>
        <SignedIn>
          <SignOutButton>
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-3xl px-4 py-3 shadow-none mx-5">
              <span className="primary-text-gradient">Sign Out</span>
            </Button>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftNavBar;
