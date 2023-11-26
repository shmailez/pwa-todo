import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const BasePage = () => {
  const day: string = new Date().toDateString();
  const [vis, setVis] = useState(false);

  const handlerVis = () => {
    setVis((vis) => !vis);
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
      <h1>today {day} </h1>
      <button onClick={() => handlerVis()}>add task</button>
      <TodoList />
    </>
  );
};

export default BasePage;
