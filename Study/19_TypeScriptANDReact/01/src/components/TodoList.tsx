import { useRef, useState } from "react";
import TodoItems from "./TodoItem";
import { todoItems } from "./types";

function TodoList() {
  const [todos, setTodos] = useState<todoItems[]>([]);
  const [newTodo, setNewTodo]= useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updateTodo = [
      ...todos,
      {id: Date.now(), text: newTodo, completed: false}
    ]
    setTodos(updateTodo);
    setNewTodo("");
  }

  const focusInput = () => {
    inputRef.current?.focus();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "ENTER") {
      addTodo();
    }
  }

  const toggleItem = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId ? {...todo, completed : !todo.completed}
      : todo;
    })
  }

  return ( 
    <div>
      <h1>Todo list</h1>
      <div>완료 개수 : {todos.filter((todo) => todo.completed === true).length}</div>
      <div>
        <input type="text" placeholder="new todo" value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} onKeyDown={(e) => {handleKeyDown(e)}} ref={inputRef}/>
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <ul>
        {todos.map((todo: todoItems) => {
          return (<TodoItems key={todo.id} todo={todo} toggleItem={todo.completed}/>)
        })}
      </ul>
    </div>
   );
}

export default TodoList;