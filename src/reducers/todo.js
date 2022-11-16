import {
  TODO_LIST_LOADED,
  NEW_TODO_ADDED,
  FILTER_CHANGED,
} from "../constants/actionTypes";

const initialState = {
  originalTodos: [
    {
      id: 1,
      title: "Learn React",
      description: "Learn advanced React concepts",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Redux",
      description: "Learn Redux core concepts",
      completed: true,
    },
  ],
  todos: [],
  activeFilter: "ALL",
};

const filterTodos = (data, activeFilter) => {
  if (activeFilter === "ALL") {
    return data;
  } else if (activeFilter === "ACTIVE") {
    return data.filter((todo) => !todo.completed);
  } else if (activeFilter === "COMPLETED") {
    return data.filter((todo) => todo.completed);
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_LIST_LOADED:
      const { activeFilter, originalTodos } = state;

      let filteredTodos = filterTodos(originalTodos, activeFilter);

      return {
        ...state,
        todos: [...filteredTodos],
      };

    case NEW_TODO_ADDED:
      console.log(state, action);

      const newTodos = [
        ...state.originalTodos,
        {
          id: state.originalTodos.length + 1,
          ...action.payload,
          completed: false,
        },
      ];

      const newFilteredTodos = filterTodos(newTodos, state.activeFilter);

      return {
        ...state,
        originalTodos: newTodos,
        todos: newFilteredTodos,
      };

    case FILTER_CHANGED:
      return {
        ...state,
        activeFilter: action.payload,
      };

    default:
      return state;
  }
};
