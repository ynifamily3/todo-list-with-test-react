export default interface Task {
  id: number;
  title: string;
  done: boolean;
}

export type Tasks = Task[];
