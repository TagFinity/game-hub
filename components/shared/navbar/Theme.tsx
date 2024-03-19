"use client";
import { initializeTheme, toggleTheme } from "@/lib/features/themes/themeSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Theme = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  return (
    <div className="">
      {darkMode ? (
        <Moon
          color="#FFF"
          size={22}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        />
      ) : (
        <Sun
          color="#000"
          size={22}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        />
      )}
    </div>
  );
};

export default Theme;
