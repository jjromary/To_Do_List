export default function TaskCreator() {
  return (
    <div className="w-full min-w-[275px] h-auto mt-8 p-4 border-1 rounded-3xl border-solid border-2 border-sky-600">

      <form>
        <div className="flex flex-col">
          <span className="text-lg" >Criar nova tarefa</span>

          <label className="mt-4 text-gray-700 text-sm font-bold mb-2">
            Título
          </label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 " />

          <label className="mt-4 text-gray-700 text-sm font-bold mb-2">
            Descrição
          </label>
          <textarea className="appearance-none resize-none border rounded w-full py-2 px-3 text-gray-700" />

          <div className="mt-4">
            <select name="statusTask" className="w-full h-10 rounded text-gray-700 border bg-inherit">
              <option value="volvo">Pendente</option>
              <option value="saab">Em andamento</option>
              <option value="mercedes">Concluída</option>
            </select>
          </div>


          <button
            type="submit"
            className=" w-full h-8 mt-4 text-white font-bold rounded bg-sky-600"
          >
            Criar!
          </button>

        </div>
      </form>
    </div>
  )
}