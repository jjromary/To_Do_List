import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import TaskCard from "../../Components/TaskCard";
import { TaskContext } from "../../Contexts/TasksContext";
import useFormatDate from "../../Hooks/useFormatDate";
import useRecover from "../../Hooks/useRecover";
import notExisting from '../../assets/notExisting.gif';


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
        <>
          <span className="w-full flex justify-center text-5xl font-bold text-sky-950 max-[425px]:text-4xl mt-8" >
            Essa Task  não existe!
          </span>
          <div className="mt-4">
            <img src={notExisting} alt="gif not exist task" width={300} height={300} />
          </div>
        </>
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