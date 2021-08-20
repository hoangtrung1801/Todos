import React from "react";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = ({ data }) => {
  return (
    <div className="Todos">
      <h1 className="TodoLogo">Todos</h1>
      <TodoInput className="toggle" />
      <TodoList data={data} />
      <TodoFilter />
    </div>
  );
};

export default Todos;
