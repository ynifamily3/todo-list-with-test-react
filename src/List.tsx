import { Tasks } from "./types/task";

function List({ tasks }: { tasks: Tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

export default List;
