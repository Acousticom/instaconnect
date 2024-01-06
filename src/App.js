import Mockman from "mockman-js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Layout from "./layout/Layout";
import Explore from "./pages/Explore";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/profile/:username" element={<Profile/>}/>
          </Route>
        </Route>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
