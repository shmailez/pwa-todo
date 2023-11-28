import TodoWindow from "../components/TodoWindow";
import { useColorTheme } from "../hooks";

const TodoPage = () => {
  const { toggleColorTheme } = useColorTheme();

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  return (
    <>
      <button className="themeToggle" onClick={onChangeTheme}>
        Change theme
      </button>
      <TodoWindow />
    </>
  );
};

export default TodoPage;
