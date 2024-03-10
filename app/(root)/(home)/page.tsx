import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div className="h-screen">
      <UserButton />
    </div>
  );
};

export default HomePage;
