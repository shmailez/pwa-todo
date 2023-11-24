import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [today, setToday] = useState();
  const day: string = new Date().toDateString();

  // const newDate = () => {
  //   const day: string
  // };

  // useEffect(() => {
  //   const day: string = new Date().toDateString();
  //   if (day) {
  //     setToday(day);
  //   }
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>today {day} </h1>
        <TodoInput
          title={""}
          setTitle={function (str: string): void {
            throw new Error("Function not implemented.");
          }}
          handleTitle={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
