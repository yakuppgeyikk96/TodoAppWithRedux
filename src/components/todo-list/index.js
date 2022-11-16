import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./todo-item";
import TodoFilters from "./todo-filters";
import "./style.css";
import { TODO_LIST_LOADED } from "../../constants/actionTypes";

const TodoList = ({ todoList, getTodos, activeFilter }) => {
  useEffect(() => {
    getTodos();
  }, [activeFilter]);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
      <TodoFilters />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { todos, activeFilter } = state.todo;

  return {
    todoList: todos,
    activeFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: () => {
      dispatch({ type: TODO_LIST_LOADED });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
