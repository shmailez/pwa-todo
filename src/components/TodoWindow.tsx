import { Link, Params, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";

interface TodoWi {
  id: string;
  handlerVis: () => void;
}

const TodoWindow: React.FC<TodoWi> = ({ handlerVis }) => {
  const param: Readonly<Params<string>> = useParams();
  const item: any = useAppSelector((state) => state.todos.todos).find(
    (todo) => todo.id === param.id
  );

  return (
    <main>
      <p>{item.title}</p>
      <p>{item.date}</p>
      {item.completed ? <p>completed</p> : <p>not compltetd</p>}
      <Link to={"/"}>Назад</Link>
    </main>
  );
};

export default TodoWindow;
