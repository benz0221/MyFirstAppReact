import React from "react";
import "./App.css";
import { useMediaQuery } from 'react-responsive';
import TopHeader from './Components/Top-Header';


function Todo({ todo, index,removeTodo }) {
  return (
    <div className="todo">
         
      {todo.text}
      <button className="removeTask" onClick={() => removeTodo(index)}>x</button>
      
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
    
      <input
        type="text"
        className="input"
        maxLength="50"
        placeholder = "Type here"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <button className="addTask" type="submit">Add Task</button>      
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {text: "Drop Kids at School"},
    {text: "Attend Daily Scrum"},
    {text: "Have Lunch with a Friend"},
    {text: "Attend New Tech Presentation"}
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
        <TopHeader></TopHeader>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
            />
          ))}
            <TodoForm addTodo={addTodo} />
        </div>
      </div>
  );
}

export default App;