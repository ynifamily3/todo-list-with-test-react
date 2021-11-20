import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import tasks from "./fixtures/tasks";
import ListContainer from "./ListContainer";
import todoState from "./state/todo";

export default function App() {
  const setTodo = useSetRecoilState(todoState); // dispatch 같은 역할

  useEffect(() => {
    setTodo(tasks); // dispatch(); 같은 역할
  }, [setTodo]);

  return (
    <>
      <h1>할 일 목록</h1>
      <ListContainer />
    </>
  );
}
