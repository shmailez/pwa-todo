import { Link, Params, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";

const TodoWindow: React.FC = () => {
  const param: Readonly<Params<string>> = useParams();
  const item: any = useAppSelector((state) => state.todos.todos).find(
    (todo) => todo.id === param.id
  );

  console.log(item);
  return (
    <main>
      <p>{item.title}</p>
      {/* <p>{item.date}</p>
      {item.completed ? <p>completed</p> : <p>not compltetd</p>}  */}
      <Link to={"/"}>Назад</Link>
    </main>
  );
};

export default TodoWindow;
