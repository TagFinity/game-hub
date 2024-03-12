"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { Moon, Sun } from "lucide-react";
import { initializeTheme, toggleTheme } from "@/lib/features/themes/themeSlice";

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
          size={20}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        />
      ) : (
        <Sun
          color="#000"
          size={20}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        />
      )}
    </div>
  );
};

export default Theme;
