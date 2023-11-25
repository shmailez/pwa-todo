import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const day: string = new Date().toDateString();
  const [vis, setVis] = useState(false);

  const handlerVis = () => {
    setVis((vis) => !vis);
  };

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
