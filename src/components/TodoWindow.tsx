import { Link, Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateDescript } from "../redux/Slice";
import { useState } from "react";

const TodoWindow: React.FC = () => {
  const param: Readonly<Params<string>> = useParams();

  const item: any = useAppSelector((state) => state.todos.todos).find(
    (todo) => todo.id === param.id
  );

  const dispatch = useAppDispatch();

  const [vis, setVis] = useState(false);

  const [currentTitle, setCurrentTitle] = useState(item.description);

  const formSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setVis((vis) => !vis);

    dispatch(
      updateDescript({
        id: item.id,
        description: currentTitle,
      })
    );
  };

  return (
    <main>
      {item && (
        <div>
          <p>{item.title}</p>
          <p>{item.date}</p>
          {item.completed ? <p>Задача готова</p> : <p>Задача не готова</p>}
        </div>
      )}

      <Link className="link" to={"/pwa-todo/"}>
        Назад
      </Link>
      {vis ? (
        <form onSubmit={formSubmit}>
          <input
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
        </form>
      ) : (
        <p onClick={() => setVis((vis) => !vis)}>{item.description}</p>
      )}

      <button onClick={formSubmit}>Добавить описание</button>
    </main>
  );
};

export default TodoWindow;
