import React from 'react';
import './App.css';
import TodoAdd from './components/todo-add';
import TodoList from './components/todo-list';

const App = () => {
  return (
    <div className='app'>
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
