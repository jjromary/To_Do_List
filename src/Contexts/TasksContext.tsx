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
}

interface taskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TraskContextType)

export function TaskProvider({ children }: taskProviderProps) {
  const [task, setTask] = useState<Task[]>([])
  const [filterStatus, setFilterStatus] = useState("");

  return (
    <TaskContext.Provider value={{
      task,
      setTask,
      filterStatus,
      setFilterStatus
    }}>
      {children}
    </TaskContext.Provider>
  )

}
