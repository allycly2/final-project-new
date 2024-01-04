import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ToDoList from "./components/ToDoList/ToDoList";
import Diary from "./components/Diary";
import Event from "./components/Event/Event";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Holiday from "./components/Holiday/Holiday";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import TopNavBar from "./components/NavBar/TopNavBar";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import UserProfile from "./components/User/UserProfile";

function App() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="navBar-container">
          <NavBar />
        </div>
        <div className="TopNavBar-container">
          <TopNavBar />
          <div className="content-container">
            <div className="button">
              <button onClick={() => handleButtonClick("/ToDoList")}>
                To Do List
              </button>
              <button onClick={() => handleButtonClick("/Diary")}>Diary</button>
              <button onClick={() => handleButtonClick("/Event")}>
                Event Calendar
              </button>
              <button onClick={() => handleButtonClick("/Holiday")}>
                Holidays Worldwide
              </button>
              <button onClick={() => handleButtonClick("/ExpenseTracker")}>
                Expense
              </button>
              <button onClick={() => handleButtonClick("/UserProfile")}>
                profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
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

export default MainApp;
