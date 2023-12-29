import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ToDoList from "./components/ToDoList";
import Diary from "./components/Diary";
import EventCalendar from "./components/EventCalendar";
import Holiday from "./components/Holiday";
import "./components/Holiday.css";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <div className="navBar-container">
        <NavBar />
      </div>
      <div className="content-container">
        <div className="button">
          <button onClick={() => handleButtonClick("/ToDoList")}>
            To Do List
          </button>
          <button onClick={() => handleButtonClick("/Diary")}>Diary</button>
          <button onClick={() => handleButtonClick("/EventCalendar")}>
            Event Calendar
          </button>
          <button onClick={() => handleButtonClick("/Holiday")}>
            Holidays Worldwide
          </button>
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
        <Route path="/EventCalendar" element={<EventCalendar />} />
        <Route path="/Holiday" element={<Holiday />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
