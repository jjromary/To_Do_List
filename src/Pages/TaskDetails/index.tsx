import moment from "moment";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import TaskCard from "../../Components/TaskCard";
import { TaskContext } from "../../Contexts/TasksContext";

export default function TaskDetails() {

  const { task, setTask } = useContext(TaskContext)
  const { id } = useParams()
  const navigate = useNavigate()



  const dateFormat = (newDate: string) => {
    newDate = moment().locale('pt-br').format('DD/MM/YYYY ')

    return newDate
  }

  const recoverTasksLocalStorage = () => {
    const recover = localStorage.getItem('keyTask')
    const recoverToJson = JSON.parse(recover!)

    setTask(recoverToJson)
  }

  const getTaskById = task.filter((taskDetails) => taskDetails.id === id)

  const goToHome = () => {
    navigate('/')
  }

  useEffect(() => {
    recoverTasksLocalStorage()
  }, [])

  return (
    <div className="container h-[600px] mt-16 flex items-center flex-col justify-center gap-8">

      {getTaskById.map((onlyOneTask) => {
        return (
          <TaskCard
            id={onlyOneTask.id}
            key={onlyOneTask.id}
            title={onlyOneTask.title}
            description={onlyOneTask.description}
            status={onlyOneTask.status}
            created_at={dateFormat(String(onlyOneTask.created_at))}
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