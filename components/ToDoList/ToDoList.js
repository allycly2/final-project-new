import { useState, useRef } from "react";
import ToDoFunction from "./ToDoFunction";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.css";
import Sidebar from "../NavBar/Sidebar";

function ToDoList() {
  const [todos, setTodos] = useState([
    /* { id: 1, name: "Todo1", completed: false }, */
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return; //<-back to line16
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    //↑console.log(todoNameRef.current.value);
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  return (
    <div className="holiday-container">
      <div className="navigation">
        <Sidebar />
      </div>
      <div className="todolist">
        <span className="todotext">Task </span>
        <br></br>
        <input type="text" ref={todoNameRef} className="taskinput"></input>
        <span className="todotext"></span>
        <div>
          <button className="ToDoButton" onClick={handleAddTodo}>
            Add Task
          </button>
          <br></br>
          <button className="ToDoButton" onClick={handleClear}>
            Delete Task
          </button>
        </div>
        <hr></hr>
        <div className="tasknum">
          Tasks Left:{todos.filter((todo) => !todo.completed).length}
        </div>

        <ToDoFunction todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}

export default ToDoList;
