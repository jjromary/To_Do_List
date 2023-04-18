
interface ButtonProps {
  name: string;
  type: "button" | "submit" | "reset";
  status?: "concluido" | "andamento" | "pendente" | "cancel";
  ariaLabel: string;
  onClick?: () => void;
}

export default function Button({ name, type, status, ariaLabel, onClick }: ButtonProps) {

  return (
    <button
      tabIndex={0}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      className={` w-full h-8 text-white font-bold rounded-lg ${status === "concluido" ? " bg-green-400" : status === "andamento" ? "bg-yellow-400" : status === "pendente" ? "bg-red-400" : status === 'cancel' ? "bg-gray-400" : 'bg-sky-500'}`}
    >
      {name}
    </button>
  )
}