import { useLocation } from "react-router-dom"

export default function Header() {
  const localtion = useLocation()

  return (
    <div className="flex items-center justify-center mt-4">
      <h1 className=" font-roboto text-5xl font-bold h-14 text-sky-950 max-[425px]:text-4xl">
        {localtion.pathname === '/' ?
          "Lista de Tarefas"
          :
          <div className="w full flex items-center justify-end ">
            Aqui está sua tarefa! Atualize as informações ou exclua a tarefa caso ela não seja mais útil!
          </div>
        }
      </h1>
    </div>
  )
}