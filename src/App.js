import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Navigate
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Admin from "./Pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import AddSkill from "./Pages/AddSkill";
import AddProject from "./Pages/AddProject";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          {/* Use Routes instead of Route in React Router v6 */}
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home />} />
            <Route path="/addSkill" element={<AddSkill />} />
            <Route path="/addProject" element={<AddProject />} />


            {/* Private route for /dashboard */}
            <Route
              path="/dashboard"
              element={
                localStorage.getItem("token") &&
                localStorage.getItem("token") !== "undefined" &&
                localStorage.getItem("token") !== "" ? (
                  <Admin />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Login route */}
            <Route path="/login" element={<Login />} />

            {/* 404 route */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
