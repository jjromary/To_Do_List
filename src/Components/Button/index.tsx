import { useContext } from "react";
import { TaskContext } from "../../Contexts/TasksContext";

interface ButtonProps {
  name: string;
  type: "button" | "submit" | "reset";
  status?: "concluido" | "andamento" | "pendente";
  onClick?: () => void;
}

export default function Button({ name, type, status, onClick }: ButtonProps) {

  const { filterStatus } = useContext(TaskContext)
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${filterStatus === '' ? '' : "focus:ring-sky-500 focus:outline-none focus:ring"}  w-full h-8 text-white font-bold rounded-lg ${status === "concluido" ? " bg-green-400" : status === "andamento" ? "bg-yellow-400" : status === "pendente" ? "bg-red-400" : 'bg-sky-500'}`}
    >
      {name}
    </button>
  )
}