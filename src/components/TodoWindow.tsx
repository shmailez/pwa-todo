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
    <div className="todoWindow ">
      {/* <div className="todoWindowDiv"> */}
      <div className="todoWindowTitle">
        <p>Задача:</p>
        <p>{item.title}</p>
      </div>

      <div className="todoWindowGeneral">
        <div className="todoWindowDate">
          <p>Задача поставлена:</p>
          <span>{item.date}</span>
        </div>
        <div className="todoWindowStatus">
          <p>Статус:</p>
          {item.completed ? (
            <span>Задача готова</span>
          ) : (
            <span>Задача не готова</span>
          )}
        </div>
      </div>

      {vis ? (
        <div className="todoWindowDescription">
          <span>Описание:</span>
          <form onSubmit={formSubmit}>
            <input
              className="descriptionInput"
              value={currentTitle}
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
          </form>
        </div>
      ) : (
        <div className="todoWindowDescription">
          <span>Описание:</span>
          <p className="description" onClick={() => setVis((vis) => !vis)}>
            {item.description}
          </p>
        </div>
      )}

      <button className="addDescription" onClick={formSubmit}>
        Добавить описание
      </button>

      <Link className="todoWindowLink" to={"/pwa-todo/"}>
        Назад
      </Link>
    </div>
  );
};

export default TodoWindow;
