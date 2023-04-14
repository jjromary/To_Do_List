import moment from "moment";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TaskCard from "../../Components/TaskCard";
import { TaskContext } from "../../Contexts/TasksContext";

export default function TaskDetails() {

  const { task, setTask } = useContext(TaskContext)
  const { id } = useParams()


  const dateFormat = (newDate: string) => {
    newDate = moment().locale('pt-br').format('DD/MM/YYYY')

    return newDate
  }

  const recoverTasksLocalStorage = () => {
    const recover = localStorage.getItem('keyTask')
    const recoverToJson = JSON.parse(recover!)

    setTask(recoverToJson)
  }

  const getTaskById = task.filter((taskDetails) => taskDetails.id === id)

  useEffect(() => {
    recoverTasksLocalStorage()
  }, [])

  return (
    <div className="container h-screen flex items-center flex-col justify-center">

      {getTaskById.map((onlyTask) => {
        return (
          <TaskCard
            title={onlyTask.title}
            description={onlyTask.description}
            status={onlyTask.status}
            created_at={dateFormat(String(onlyTask.created_at))}
          />
        )
      })}

    </div>
  )
}