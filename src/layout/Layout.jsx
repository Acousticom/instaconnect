import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SuggestionBar from "../components/suggestionBar/SuggestionBar";
const Layout = () => {
  return (
    <div>
      <Navbar className="" />
      <div className="flex justify-center">
        <div className="mt-20 fixed left-5 ">
          <Sidebar />
        </div>
        <main className="w-700 mt-20">
          <Outlet />
        </main>
        <div className="mt-20 fixed right-2">
          <SuggestionBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
