import React, { useState } from "react";
import { connect } from "react-redux";
import { NEW_TODO_ADDED } from "../../constants/actionTypes";
import "./style.css";

const TodoAdd = ({ addNewTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    if (title !== "" && description !== "") {
      addNewTodo({title, description});

      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="todo-add" onSubmit={onSubmit}>
      <form className="form-group">
        <div className="form-control">
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onInput={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Description"
            value={description}
            onInput={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-btn" role="button" onClick={onSubmit}>
          Add
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: (payload) => {
        dispatch({ type: NEW_TODO_ADDED, payload })
    }
  };
};

export default connect(() => ({}), mapDispatchToProps)(TodoAdd);
