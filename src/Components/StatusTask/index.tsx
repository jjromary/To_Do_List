import { CheckCircle, CircleNotch, PauseCircle } from "@phosphor-icons/react";

interface StatusTaskProps {
  currentState: string;
}

export default function StatusTask({ currentState }: StatusTaskProps) {
  return (
    <div>
      {currentState === "concluido" && (
        <div className="flex items-center justify-start">
          <CheckCircle size={16} weight="fill" color={"#4ade80"} />
          <span className="ml-1 w-28 flex items-center justify-start">Concluído</span>
        </div>
      )}

      {currentState === "pendente" && (
        <div className="flex items-center">

          <PauseCircle size={16} weight="fill" color={"#f87171"} />
          <span className="ml-1 w-28 flex items-center justify-start">Pendente</span>
        </div>
      )}

      {currentState === "andamento" && (
        <div className="flex items-center">
          <CircleNotch size={16} weight="fill" color={"#facc15"} />
          <span className="ml-1 w-32 flex items-center justify-start">Em andamento</span>
        </div>
      )}
    </div>
  )
}