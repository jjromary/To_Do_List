import { zodResolver } from '@hookform/resolvers/zod';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import * as zod from 'zod';
import { TaskContext } from '../../Contexts/TasksContext';
import Button from "../Button";

const newTaskValidationSchema = zod.object({
  id: zod.string(),
  title: zod.string().min(3, 'Título precisa ter no mínimo 3 caracteres'),
  description: zod.string(),
  status: zod.string(),
  created_at: zod.string()
})


type newPostFormData = zod.infer<typeof newTaskValidationSchema>

export default function TaskCreator() {
  const { task, setTask } = useContext(TaskContext)

  const handleCreateNewTask = (data: newPostFormData) => {

    data.created_at = moment().format();
    data.id = uuidv4()

    setTask([...task, data])
  }

  const saveTaskLocalStorage = () => {
    localStorage.setItem('keyTask', JSON.stringify(task));
  }

  const recoverTasksLocalStorage = () => {
    const recover = localStorage.getItem('keyTask')
    const recoverToJson = JSON.parse(recover!)

    setTask(recoverToJson)
  }

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(newTaskValidationSchema),
    defaultValues: {
      id: '',
      title: '',
      description: '',
      status: '',
      created_at: '',
    },
  })

  useEffect(() => {
    if (localStorage.getItem('keyTask')) {
      recoverTasksLocalStorage()
    }
  }, [])

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        title: '',
        description: '',
        status: '',
        id: '',
        created_at: '',
      });
      saveTaskLocalStorage()
    }
  }, [formState, reset]);


  return (
    <div className="w-full min-w-[275px] h-auto mt-8 p-4 border-1 rounded-lg border-solid border-2 border-sky-600">

      <form onSubmit={handleSubmit(handleCreateNewTask)}>

        <div className="flex flex-col">
          <span className="text-lg" >Criar nova tarefa</span>

          <label className="mt-4 text-gray-700 text-sm font-bold mb-2">
            Título
          </label>
          <input
            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 "
            {...register('title')}
          />

          <label className="mt-4 text-gray-700 text-sm font-bold mb-2">
            Descrição
          </label>
          <textarea
            className="appearance-none resize-none border rounded-lg w-full py-2 px-3 text-gray-700"
            {...register('description')}
          />

          <label className="mt-4 text-gray-700 text-sm font-bold mb-2">
            Status
          </label>
          <select
            className="w-full h-10 rounded-lg text-gray-700 border bg-inherit"
            {...register('status')}
          >
            <option value="andamento">Em andamento</option>
            <option value="pendente">Pendente</option>
            <option value="concluido">Concluído</option>
          </select>


          <div className="w-full flex items-center justify-center mt-4">
            <Button
              name="Criar!"
              type="submit"
            />
          </div>

        </div>
      </form>
    </div>
  )
}
