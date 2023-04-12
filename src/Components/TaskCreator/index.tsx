import Button from "../Button";

export default function TaskCreator() {
  return (
    <div className="w-full min-w-[275px] h-auto mt-8 p-4 border-1 rounded-lg border-solid border-2 border-sky-600">

      <form>
        <div className="flex flex-col">
          <span className="text-lg" >Criar nova tarefa</span>

          <label className="mt-4 text-gray-700 text-sm font-bold mb-2">
            Título
          </label>
          <input className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 " />

          <label className="mt-4 text-gray-700 text-sm font-bold mb-2">
            Descrição
          </label>
          <textarea className="appearance-none resize-none border rounded-lg w-full py-2 px-3 text-gray-700" />

          <div className="mt-4">
            <select name="statusTask" className="w-full h-10 rounded-lg text-gray-700 border bg-inherit">
              <option value="pendente">Pendente</option>
              <option value="andamento">Em andamento</option>
              <option value="concluido">Concluído</option>
            </select>
          </div>

          <div className="w-full flex items-center justify-center mt-4">
            <Button
              name="Criar!"
              type="submit"
            />
          </div>

          {/* <button
            type="submit"
            className=" w-40 h-8 mt-4 text-white font-bold rounded-lg bg-sky-600"
          >
            Criar!
          </button> */}

        </div>
      </form>
    </div>
  )
}