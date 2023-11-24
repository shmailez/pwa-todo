import { useState } from "react";
import { addTask } from "../redux/Slice";
import { useAppDispatch } from "../hooks";

interface TodoInputProps {
  title: string;
  setTitle: (str: string) => void;
  handleTitle: () => void;
}

const TodoInput: React.FC<TodoInputProps> = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleTitle = () => {
    if (title) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleTitle}> add </button>
    </div>
  );
};

export default TodoInput;
