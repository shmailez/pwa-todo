import { useAppDispatch } from "../hooks";
import { removeTask, toggleTask } from "../redux/Slice";

interface TodoItemInterface {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemInterface> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTask(id))}
      />
      <p>{title}</p>
      <span onClick={() => dispatch(removeTask(id))}> DEL </span>
    </li>
  );
};

export default TodoItem;
