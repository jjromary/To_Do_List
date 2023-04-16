import { useContext } from "react"
import { useLocation, useParams } from "react-router-dom"
import { TaskContext } from "../../Contexts/TasksContext"

export default function Header() {
  const { id } = useParams()
  const localtion = useLocation()

  const { task } = useContext(TaskContext)

  const positionTask = task.findIndex((foundIndex) => foundIndex.id === id)

  return (
    <div className="flex items-center justify-center mt-4">
      <h1 className=" font-roboto text-5xl font-bold h-14 text-sky-950 max-[425px]:text-4xl">
        {localtion.pathname === '/' ?
          "Lista de Tarefas"
          :
          <div className="w full flex flex-col items-center justify-end ">
            Aqui está sua {positionTask + 1}º tarefa!
            <div className="w-full flex items-center justify-center text-center mt-8 text-3xl">
              Atualize as informações ou exclua a tarefa caso ela não seja mais útil!
            </div>
          </div>
        }
      </h1>
    </div>
  )
}