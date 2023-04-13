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
}

interface taskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext({} as TraskContextType)

export function TaskProvider({ children }: taskProviderProps) {
  const [task, setTask] = useState<Task[]>([])



  return (
    <TaskContext.Provider value={{
      task,
      setTask,
    }}>
      {children}
    </TaskContext.Provider>
  )

}
