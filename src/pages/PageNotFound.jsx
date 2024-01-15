import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate=useNavigate()
  return (
    <div className="flex justify-center items-center h-[70vh] text-center">
      <div>
        <p className="text-2xl text-purple-500 font-semibold sScreens:text-xl ">404</p>
        <p className="text-5xl sScreens:text-3xl">Page not found 🔍</p>
        <p className="text-lg my-8 sScreens:text-base sScreens:my-2">Sorry, we couldn't find the page you are looking for.</p>
        <div className="flex justify-center gap-4 sScreens:gap-1">
            <button className="px-3 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white" onClick={()=>navigate('/')}>Back to Home</button>
            <button className="px-3 py-2">Contact support</button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
