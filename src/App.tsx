import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
