import React, { useState } from "react";
import Brandlogo from "../Brandlogo";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Signupform = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { signupHandler } = useAuth();

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      toast.error("Your password and confirm password not matched");
    } else {
      signupHandler(userDetails);
    }
  };
  return (
    <div>
      <form
        onSubmit={signupSubmitHandler}
        className="border-2 text-lg p-4 rounded-lg w-[360px] mobiles:w-screen shadow-xl hover:shadow-2xl mx-2"
      >
        <div className="flex justify-center">
          <Brandlogo />
        </div>

        <div htmlFor="first-name" className="flex flex-col my-2">
          <label>First Name:</label>
          <input
            type="text"
            id="first-name"
            value={userDetails.firstName}
            onChange={(event) =>
              setUserDetails({ ...userDetails, firstName: event.target.value })
            }
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        <div htmlFor="last-name" className="flex flex-col my-2">
          <label>Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={userDetails.lastName}
            onChange={(event) =>
              setUserDetails({ ...userDetails, lastName: event.target.value })
            }
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        <div htmlFor="email" className="flex flex-col my-2">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={userDetails.email}
            onChange={(event) =>
              setUserDetails({ ...userDetails, email: event.target.value })
            }
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        <div htmlFor="username" className="flex flex-col my-2">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={userDetails.username}
            onChange={(event) =>
              setUserDetails({ ...userDetails, username: event.target.value })
            }
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        <div htmlFor="password" className="flex flex-col my-2">
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={userDetails.password}
            onChange={(event) =>
              setUserDetails({ ...userDetails, password: event.target.value })
            }
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        <div htmlFor="confirm-password" className="flex flex-col my-2">
          <label>Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={userDetails.confirmPassword}
            onChange={(event) =>
              setUserDetails({
                ...userDetails,
                confirmPassword: event.target.value,
              })
            }
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        <button
          type="submit"
          className="w-full my-3 py-2 rounded-lg bg-primaryColor text-white font-semibold"
        >
          Signup
        </button>
        <span className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primaryColor">
            Log in
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signupform;
