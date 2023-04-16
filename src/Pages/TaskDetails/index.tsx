import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import TaskCard from "../../Components/TaskCard";
import { TaskContext } from "../../Contexts/TasksContext";
import useFormatDate from "../../Hooks/useFormatDate";
import useRecover from "../../Hooks/useRecover";

export default function TaskDetails() {

  const { recoverTasksToLocal } = useRecover()
  const { id } = useParams()
  const navigate = useNavigate()

  const { task, setTask, updateTask } = useContext(TaskContext)

  const getTaskById = task.filter((taskDetails) => taskDetails.id === id)


  const goToHome = () => {
    navigate('/')
  }

  useEffect(() => {
    setTask(recoverTasksToLocal)
  }, [updateTask])


  return (
    <div className="container h-[600px] flex items-center flex-col justify-center gap-8">

      {getTaskById.length <= 0 &&
        <span>Task inexistente!</span>
      }

      {getTaskById.map((onlyOneTask) => {
        return (
          <TaskCard
            id={onlyOneTask.id}
            key={onlyOneTask.id}
            title={onlyOneTask.title}
            description={onlyOneTask.description}
            status={onlyOneTask.status}
            created_at={useFormatDate(String(onlyOneTask.created_at))}
          />
        )
      })}

      <div className="w-9/12 flex items-center gap-4">
        <Button
          name="Voltar"
          type="button"
          onClick={() => goToHome()}
        />
      </div>
    </div>
  )
}