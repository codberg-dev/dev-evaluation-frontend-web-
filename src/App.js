import React, { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useMessage } from './hook/hooks';
import TodoItem from './components/TodoItem';


function App() {

  const { getMode } = useMessage()

  const [currentId, setCurrentId] = useState(null)

  // useEffect(() => console.log(currentId), [currentId])

  return (
    <div className="App">
      <div className='todo-main-container'>
        <TodoList setCurrentId={setCurrentId}/>
      </div>
      <div className='todo-sub-container'>
        {getMode === 'add' && <AddTodo setCurrentId={setCurrentId}/>}
        {getMode === 'manage' && <TodoItem id={currentId}/>}
      </div>
    </div>
  );
}

export default App;
