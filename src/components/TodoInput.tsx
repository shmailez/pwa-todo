import { useState } from "react";
import { addTask } from "../redux/Slice";
import { useAppDispatch } from "../hooks";

interface TodoInputProps {
  close: () => void;
  title: string;
  setTitle: (str: string) => void;
  handleTitle: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ close }) => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleTitle = () => {
    if (title) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  const cliker = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    handleTitle(), close();
  };

  return (
    <div className="todoInput">
      <button className="close" onClick={() => close()}>
        close
      </button>
      <input
        className="addInput"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={cliker}> add </button>
    </div>
  );
};

export default TodoInput;
