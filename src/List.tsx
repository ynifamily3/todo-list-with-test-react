import { Tasks } from "./types/task";

function List({
  tasks,
  onClick,
}: {
  tasks: Tasks;
  onClick: (id: number) => void;
}) {
  if (tasks.length === 0) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => onClick(task.id)}>완료</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
