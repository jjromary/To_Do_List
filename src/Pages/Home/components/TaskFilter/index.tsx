import { Funnel } from "@phosphor-icons/react";
import Button from "../../../../Components/Button";

export default function TaskFilter() {
  return (
    <div className="w-full my-8 flex flex-col items-start justify-start gap-1">
      <span className="text-lg flex items-center">
        <Funnel size={24} />
        Filtre suas tarefas por:
      </span>
      <div className="w-full flex items-center justify-start gap-1 max-[400px]:flex-col">

        <Button
          name="Concluído"
          type="button"
          status='concluido'
        />
        <Button
          name="Em andamento"
          type="button"
          status="andamento"
        />
        <Button
          name="Pendente"
          type="button"
          status="pendente"
        />
      </div>
    </div>
  )
}