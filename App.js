import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ToDoList from "./components/ToDoList/ToDoList";
import Diary from "./components/Diary/Diary";
import Event from "./components/Event/Event";
import "./App.css";
import Sidebar from "./components/NavBar/Sidebar";
import Holiday from "./components/Holiday/Holiday";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import TopNavBar from "./components/NavBar/TopNavBar";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import UserProfile from "./components/User/UserProfile";
import backgroundImage from "./components/Image/image.png";

function MainApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    // Perform any logout-related actions (e.g., clear local storage, reset state)
    setIsLoggedIn(false);
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="App" style={styles}>
      <div className="nav">
        <div className="navBar-container">
          <Sidebar isLoggedIn={isLoggedIn} logout={handleLogout} />
        </div>
      </div>
      <div className="content-container">
        <div
          style={{
            backgroundImage: "{image}",
          }}
        ></div>
        <div className="home-page-content">
          <h1 className="home-h1">Hello and Welcome</h1>
          <br></br>
          <p className="home-p">
            Log in to continue your journey of self-expression, planning and
            organization.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Holiday" element={<Holiday />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
