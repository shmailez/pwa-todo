import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useColorTheme } from "../hooks";

const BasePage = () => {
  const day: string = new Date().toDateString();
  const [vis, setVis] = useState(false);

  const handlerVis = () => {
    setVis((vis) => !vis);
  };

  const { toggleColorTheme } = useColorTheme();

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  return (
    <>
      {vis && (
        <TodoInput
          close={handlerVis}
          title={""}
          setTitle={function (str: string): void {
            throw new Error("Function not implemented.");
          }}
          handleTitle={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <button className="themeToggle" onClick={onChangeTheme}>
        Change theme
      </button>
      <h1>Сегодня:</h1>
      <p>{day}</p>
      <button className="generalAddButton" onClick={() => handlerVis()}>
        Добавить задачу
      </button>
      <TodoList />
    </>
  );
};

export default BasePage;
function toggleColorTheme() {
  throw new Error("Function not implemented.");
}
