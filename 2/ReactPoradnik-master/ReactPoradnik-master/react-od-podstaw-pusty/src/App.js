import React from 'react';
import './App.css';

import './styles/button.css';
import './styles/input.css';
import './styles/todoList.css';
import './styles/todo.css';

import {ToDoList } from './components/ToDoList';

function App() {
return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;
