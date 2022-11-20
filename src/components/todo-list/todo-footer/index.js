import React from "react";
import TodoFilters from "./todo-filters";
import TodoActions from "./todo-actions";
import "./style.css";

const TodoFooter = () => {
  return (
    <div className="todo-footer">
      <TodoFilters />
      <TodoActions />
    </div>
  );
};

export default TodoFooter;
