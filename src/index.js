import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/userContext";
import { PostProvider } from "./context/postContext";
import { AuthProvider } from "./context/authContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <PostProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
              containerStyle={{
                top: "1rem",
                right: "1rem",
                fontSize: "0.9rem",
              }}
            />
            <App />
          </PostProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
