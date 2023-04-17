import { Task } from "../Contexts/TasksContext";

export default function useRecover() {
  const recover = localStorage.getItem("keyTask");
  const recoverTasksToLocal: Task[] = JSON.parse(recover!);

  return {
    recoverTasksToLocal,
  };
}

