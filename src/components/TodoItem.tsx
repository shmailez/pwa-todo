import { useAppDispatch } from "../hooks";
import { removeTask, toggleTask } from "../redux/Slice";
import { Link } from "react-router-dom";

interface TodoItemInterface {
  id: string;
  title: string;
  completed: boolean;
  date: string;
  deadline: string;
}

const TodoItem: React.FC<TodoItemInterface> = ({
  id,
  title,
  completed,
  deadline,
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <li className="taskItem" key={id}>
        <div className="taskItemdiv">
          <input
            className="taskItemCheck my-checkbox-x2"
            type="checkbox"
            checked={completed}
            onChange={() => dispatch(toggleTask(id))}
          />
          <Link className="taskItemLink" to={`/pwa-todo/${id}`}>
            <p className="taskTitle">{title}</p>
          </Link>
          <span
            className="taskItemButton"
            onClick={() => dispatch(removeTask(id))}
          >
            {" "}
            DEL{" "}
          </span>
        </div>
        {deadline && (
          <span className="taskItemDeadline">Закончить до: {deadline}</span>
        )}
      </li>
    </>
  );
};

export default TodoItem;
