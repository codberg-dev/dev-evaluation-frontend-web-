import { useState } from 'react';

function useMessage() {
  const [todos, setTodos] = useState([]);

  // 투두리스트 추가 기능
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // 투두리스트 삭제 기능
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // 투두리스트 수정 기능
  const editTodo = (index, newTodo) => {
    const newTodos = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
  };

  return {todos,addTodo,deleteTodo,editTodo};
}

export default useMessage