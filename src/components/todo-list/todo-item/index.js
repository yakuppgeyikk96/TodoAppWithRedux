import React from "react";
import { connect } from "react-redux";
import { TOGGLE_TODO_STATUS } from "../../../constants/actionTypes";
import './style.css';

const TodoItem = ({ id, title, description, completed, toggleStatus }) => {
  const onItemMarked = () => {
    toggleStatus(id);
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={completed} onChange={onItemMarked} />
      <div className="todo-item-info">
        <p className={completed ? 'text-line-through' : ''}>{title}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleStatus: (id) => {
      dispatch({ type: TOGGLE_TODO_STATUS, payload: id });
    },
  };
};

export default connect(() => ({}), mapDispatchToProps)(TodoItem);
