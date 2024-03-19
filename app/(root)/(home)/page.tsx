import CreateNewPost from "@/components/home/CreateNewPost";
import PostCards from "@/components/home/PostCards";
import PostForm from "@/components/home/PostForm";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";

const posts = [{ _id: "dddddd3sd" }, { _id: "dddsadd3sd" }];

const HomePage = () => {
  return (
    <>
      <div className="flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Community Posts</h1>

        {/* <Link
        href="/api/createNewPost"
        className="flex justify-end max-sm:w-full"
      > */}
        <div className="flex justify-end max-sm:w-full">
          <CreateNewPost />
        </div>
        {/* </Link> */}
      </div>
      <PostForm />
      <div className="mt-11 flex justify-end gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeHolder="Search Posts"
          otherClasses="flex-1"
        />
      </div>
      <div className="mt-10 flex w-full flex-col gap-6 ">
        {posts.length > 0 ? (
          posts.map((post) => <PostCards key={post._id} />)
        ) : (
          <NoResult
            title="There's no posts to show."
            description=" Be the first to Break the Silence! Create a post and Kick start the
            community. Your post is the next big think the others can post to active
            this community."
            link="/"
            linkTitle="Create a Post"
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
