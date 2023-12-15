import TodoItem from "./TodoItem";
import { useAppSelector } from "../hooks";

const TodoList: React.FC = () => {
  const list = useAppSelector((state) => state.todos.todos);

  // const

  return (
    <ul className="generalColumn">
      {list.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
      {/* {list.map((todo) => (
        <li key={todo.id}>{todo.deadline}</li>
      ))} */}
    </ul>
  );
};

export default TodoList;
