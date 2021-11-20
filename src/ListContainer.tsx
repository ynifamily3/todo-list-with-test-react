import { useRecoilValue, useSetRecoilState } from "recoil";
import List from "./List";
import todoState from "./state/todo";

export default function ListContainer() {
  const tasks = useRecoilValue(todoState);
  const setTasks = useSetRecoilState(todoState);

  const handleClick = (id: number) => {
    // delete task
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return <List tasks={tasks} onClick={handleClick} />;
}
