import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  }

  return (
    <div className="TodoWrapper">
      <h1>Faites avancer les choses !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>(
          <Todo key={index} task={todo}/>
       ))}
    </div>
  );
};