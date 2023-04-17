import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
}

interface TraskContextType {
  task: Task[];
  setTask: Dispatch<SetStateAction<Task[]>>;
  filterStatus: string;
  setFilterStatus: Dispatch<SetStateAction<string>>;
  updateTask: number;
  setUpdateTask: Dispatch<SetStateAction<number>>;
}

interface taskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TraskContextType)

export function TaskProvider({ children }: taskProviderProps) {
  const [task, setTask] = useState<Task[]>([])
  const [filterStatus, setFilterStatus] = useState("");
  const [updateTask, setUpdateTask] = useState<number>(0)

  return (
    <TaskContext.Provider value={{
      task,
      setTask,
      filterStatus,
      setFilterStatus,
      updateTask,
      setUpdateTask
    }}>
      {children}
    </TaskContext.Provider>
  )

}
