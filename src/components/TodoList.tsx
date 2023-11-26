import TodoItem from "./TodoItem";
import { useAppSelector } from "../hooks";

const TodoList: React.FC = () => {
  const list = useAppSelector((state) => state.todos.todos);

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
