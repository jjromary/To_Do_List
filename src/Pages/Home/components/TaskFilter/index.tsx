import { useContext } from "react";
import Button from "../../../../Components/Button";
import StatusTask from "../../../../Components/StatusTask";
import { TaskContext } from "../../../../Contexts/TasksContext";

export default function TaskFilter() {
  const { filterStatus, setFilterStatus } = useContext(TaskContext)

  const selectdStatusFilter = (status: string) => {
    if (filterStatus === status) {
      setFilterStatus("")
    } else {
      setFilterStatus(status)
    }
  }

  return (
    <div className="w-full my-8 flex flex-col items-start justify-start gap-1">
      <span className="text-lg flex items-center max-[425px]:text-sm ">

        {filterStatus === '' ? 'Filtre suas tarefas por status!' : 'Filtrando suas tarefas por:'}

        <span className="text-lg ml-2 flex items-center max-[425px]:text-sm">
          <StatusTask currentState={filterStatus} />
        </span>

      </span>
      <div className="w-full flex items-center justify-start gap-1 max-[400px]:flex-col">

        <Button
          name="Concluído"
          type="button"
          status='concluido'
          onClick={() => selectdStatusFilter('concluido')}
        />
        <Button
          name="Em andamento"
          type="button"
          status="andamento"
          onClick={() => selectdStatusFilter('andamento')}
        />
        <Button
          name="Pendente"
          type="button"
          status="pendente"
          onClick={() => selectdStatusFilter('pendente')}
        />
      </div>
    </div>
  )
}