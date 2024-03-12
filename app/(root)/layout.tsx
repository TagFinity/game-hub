import NavBar from "@/components/shared/navbar/NavBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative text-dark400_light700">
      <NavBar />
      <div className="flex">
        Left Sidebar
        <section className="flex min-h-screnn flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-2 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        Right Sidebar
      </div>
      Toaster
    </main>
  );
};

export default Layout;
