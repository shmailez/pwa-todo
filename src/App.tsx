import "./App.css";
import BasePage from "./pages/BasePage";
import TodoPage from "./pages/TodoPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<BasePage />} />
          <Route path="/:id" element={<TodoPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
