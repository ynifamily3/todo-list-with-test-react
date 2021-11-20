import { useRecoilValue } from "recoil";
import List from "./List";
import todoState from "./state/todo";

export default function ListContainer() {
  const tasks = useRecoilValue(todoState);
  return <List tasks={tasks} />;
}
