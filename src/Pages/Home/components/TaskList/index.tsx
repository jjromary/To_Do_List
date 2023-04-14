import { ReactNode } from "react";

interface TaskListProps {
  children: ReactNode;
}

export default function TaskList({ children }: TaskListProps) {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-4 ">
      {children}
    </div>

  )
}