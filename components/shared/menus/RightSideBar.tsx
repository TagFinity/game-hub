const RightSideBar = () => {
  return (
    <section
      className="background-light900_dark200 light-border stickey right-0 top-0 flex h-screen flex-col overflow-y-auto border-1 p-6 pt-36 shadow-light-300 
  dark:shadow-none max-lg:hidden w-[350px] custom-scrollbar"
    >
      <h3 className="h3-bold text-dark200_light900">Online Members</h3>
      <h3 className="h3-bold text-dark200_light900">Teams</h3>
      <h3 className="h3-bold text-dark200_light900 mt-16">Tournoments</h3>
    </section>
  );
};

export default RightSideBar;
