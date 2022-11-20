import React from "react";
import { connect } from "react-redux";
import {
  MARK_ALL_AS_COMPLETED,
  REMOVE_COMPLETED,
} from "../../../../constants/actionTypes";
import "./style.css";

const TodoActions = ({ markAllAsCompleted, removeCompleted }) => {
  return (
    <div className="todo-actions-container">
      <div className="action" onClick={markAllAsCompleted}>
        Mark all as completed
      </div>
      <div className="action" onClick={removeCompleted}>
        Remove completed
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    markAllAsCompleted: () => {
      dispatch({ type: MARK_ALL_AS_COMPLETED });
    },
    removeCompleted: () => {
      dispatch({ type: REMOVE_COMPLETED });
    },
  };
};

export default connect(() => ({}), mapDispatchToProps)(TodoActions);
