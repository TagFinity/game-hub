"use client";
import { toggleButton } from "@/lib/features/ui/createPostSlice";
import { AppDispatch } from "@/lib/store";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";

const CreateNewPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
      onClick={() => dispatch(toggleButton())}
    >
      New Post
    </Button>
  );
};

export default CreateNewPost;
