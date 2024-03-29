import LeftSideBar from "@/components/shared/menus/LeftSideBar";
import RightSideBar from "@/components/shared/menus/RightSideBar";
import NavBar from "@/components/shared/navbar/NavBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative text-dark400_light700">
      <NavBar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex max-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
      {/* Toaster */}
    </main>
  );
};

export default Layout;
