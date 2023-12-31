import "./App.css";
import BasePage from "./pages/BasePage";
import TodoPage from "./pages/TodoPage";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  const i = useParams();
  // console.log(i);
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/pwa-todo/" element={<BasePage />} />
          {i && <Route path="/pwa-todo/:id" element={<TodoPage />} />}
        </Routes>
      </header>
    </div>
  );
}

export default App;
