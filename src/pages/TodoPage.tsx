import TodoWindow from "../components/TodoWindow";

const TodoPage = () => {
  return (
    <>
      <TodoWindow
        id={""}
        handlerVis={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default TodoPage;
