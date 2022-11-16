import React from "react";
import { connect } from "react-redux";
import { FILTER_CHANGED } from "../../../constants/actionTypes";
import "./style.css";

const TodoFilters = ({ activeFilter, changeFilter }) => {
  return (
    <div className="todo-filters-container">
      <div className={`filter all ${activeFilter === "ALL" ? "selected" : ""}`}
        onClick={() => changeFilter("ALL")}
      >
        All
      </div>
      <div
        className={`filter active ${
          activeFilter === "ACTIVE" ? "selected" : ""
        }`}
        onClick={() => changeFilter("ACTIVE")}
      >
        Active
      </div>
      <div
        className={`filter completed ${
          activeFilter === "COMPLETED" ? "selected" : ""
        }`}
        onClick={() => changeFilter("COMPLETED")}
      >
        Completed
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { activeFilter } = state.todo;

  return { activeFilter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (payload) => {
      dispatch({ type: FILTER_CHANGED, payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters);
