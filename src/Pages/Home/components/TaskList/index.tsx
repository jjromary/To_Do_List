import { ReactNode } from "react";

interface TaskListProps {
  children: ReactNode;
}

export default function TaskList({ children }: TaskListProps) {
  return (
    <div className="w-full h-auto mt-4 flex flex-col justify-center items-center gap-4 scroll-smooth">
      {children}
    </div>

  )
}