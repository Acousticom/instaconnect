import React from "react";
import image from "../assests/Images/Following-amico (1).png";
import Signupform from "../components/authentication/Signupform";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center gap-3">
        <img src={image} alt="" className="w-80 sDevices:hidden" />
        <Signupform />
      </div>
    </div>
  );
};

export default Signup;
