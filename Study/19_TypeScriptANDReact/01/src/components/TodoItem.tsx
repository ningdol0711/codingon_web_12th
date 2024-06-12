import { todoItems } from "./types";

interface Props {
  todo: todoItems;
  toggleItem: (id: number) => void;
}

function TodoItems({ todo, toggleItem }: Props) {
  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={todo.completed} onChange={() => {toggleItem}}/>
        {todo.text}
      </label>
    </li>
  );
}

export default TodoItems;
