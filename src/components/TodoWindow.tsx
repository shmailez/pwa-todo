import { Link, Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateDeadline, updateDescript } from "../redux/Slice";
import { useState } from "react";

const TodoWindow: React.FC = () => {
  const param: Readonly<Params<string>> = useParams();

  const item: any = useAppSelector((state) => state.todos.todos).find(
    (todo) => todo.id === param.id
  );

  const dispatch = useAppDispatch();

  const [vis, setVis] = useState(false);
  const [visDead, setVisDead] = useState(false);

  const [currentDeadline, setCurrentDeadline] = useState(item.deadline);

  const [currentTitle, setCurrentTitle] = useState(item.description);

  const deadlineSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setVisDead((vis) => !vis);

    dispatch(updateDeadline({ id: item.id, deadline: currentDeadline }));
  };

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
      <Link className="todoWindowLink" to={"/pwa-todo/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 
            .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />{" "}
        </svg>
      </Link>

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

      {visDead ? (
        <div className="todoWindowDeadline">
          <span>Закончить до:</span>
          <form onSubmit={deadlineSubmit}>
            <input
              className="deadlineInput"
              type="datetime-local"
              value={currentDeadline}
              onChange={(e) => setCurrentDeadline(e.target.value)}
            />
          </form>
        </div>
      ) : (
        <>
          <div className="todoWindowDeadline">
            <span>Закончить до:</span>
            <p
              className="deadlineSpan"
              onClick={() => setVisDead((vis) => !vis)}
            >
              {item.deadline}
            </p>
          </div>
        </>
      )}

      <button className="addDescription" onClick={deadlineSubmit}>
        Добавить дату
      </button>

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
    </div>
  );
};

export default TodoWindow;
