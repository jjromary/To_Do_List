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
            Aqui você visualizar melhor a sua tarefa, editar as informações e também exclui-la!
          </div>
        }
      </h1>
    </div>
  )
}