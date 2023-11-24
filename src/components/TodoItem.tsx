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
      <span>{title}</span>
      <span onClick={() => dispatch(removeTask(id))}> X </span>
    </li>
  );
};

export default TodoItem;
