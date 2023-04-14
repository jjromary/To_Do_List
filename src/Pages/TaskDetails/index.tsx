import moment from "moment";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import TaskCard from "../../Components/TaskCard";
import { TaskContext } from "../../Contexts/TasksContext";

export default function TaskDetails() {
  const { task } = useContext(TaskContext)
  const { id } = useParams()

  const dateFormat = (newDate: string) => {
    newDate = moment().locale('pt-br').format('DD/MM/YYYY')

    return newDate
  }

  const getTaskById = task.filter((taskDetails) => taskDetails.id === id)

  return (
    <div className="container h-screen flex items-center justify-center">

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