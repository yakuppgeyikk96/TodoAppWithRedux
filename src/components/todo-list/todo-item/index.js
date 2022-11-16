import React from "react";
import './style.css';

const TodoItem = ({ id, title, description, completed }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" defaultChecked={completed} />
      <div className="todo-item-info">
        <p className={completed ? 'text-line-through' : ''}>{title}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default TodoItem
