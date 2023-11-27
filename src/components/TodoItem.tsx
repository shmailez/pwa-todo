import { useAppDispatch } from "../hooks";
import { removeTask, toggleTask } from "../redux/Slice";
import { Link } from "react-router-dom";

interface TodoItemInterface {
  id: string;
  title: string;
  completed: boolean;
  date: string;
}

const TodoItem: React.FC<TodoItemInterface> = ({
  id,
  title,
  completed,
  date,
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <li className="taskItem" key={id}>
        {/* <Link to={`/pwa-todo/${id}`}>MORE</Link> */}
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(toggleTask(id))}
          />
          <Link className="link" to={`/pwa-todo/${id}`}>
            <p>{title}</p>
          </Link>
          <span onClick={() => dispatch(removeTask(id))}> DEL </span>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
