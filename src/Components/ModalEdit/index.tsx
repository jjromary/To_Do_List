import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import { Task, TaskContext } from '../../Contexts/TasksContext';
import Button from '../Button';


interface ModalEditProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
  title: string;
  description: string;
  status: string;
}

const editTaskValidationSchema = zod.object({
  title: zod.string().min(3, 'Título precisa ter no mínimo 3 caracteres'),
  description: zod.string(),
  status: zod.string(),
})

type editFormData = zod.infer<typeof editTaskValidationSchema>


Modal.setAppElement('#root')

export default function ModalEdit({ isOpen, id, description, title, status, onRequestClose }: ModalEditProps) {
  const [recoverArrayLocal, setRecoverArrayLocal] = useState<Task[]>([])

  const { task, setUpdateTask, updateTask } = useContext(TaskContext)
  const navigate = useNavigate();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(editTaskValidationSchema),
    defaultValues: {
      title: title,
      description: description,
      status: status,
    },
  })

  const recoverTasksLocalStorage = () => {
    const recover = localStorage.getItem('keyTask')
    const recoverToJson = JSON.parse(recover!)

    setRecoverArrayLocal(recoverToJson)
  }


  const updateTaksList = () => {
    setUpdateTask(updateTask + 1);
  }

  const editTask = (id: string, title: string, description: string, status: string) => {

    const editingTask = task.filter((foundTask) => foundTask.id === id)
      .map((currentTask) => ({
        ...currentTask,
        title: title,
        description: description,
        status: status
      }))


    const numberIndex = task.findIndex((foundIndex) => foundIndex.id === id)

    if (recoverArrayLocal) {
      recoverArrayLocal.splice(numberIndex, 1, editingTask[0]);
      localStorage.setItem('keyTask', JSON.stringify(recoverArrayLocal));
    }

    updateTaksList()

  }

  const handleEditTask = (data: editFormData) => {
    editTask(id, data.title, data.description, data.status)

    onRequestClose()
    // refreshPage()
  }

  useEffect(() => {
    recoverTasksLocalStorage()
  }, [])


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-edit-overlay"
      className="react-modal-edit-content"
    >
      <form onSubmit={handleSubmit(handleEditTask)}>
        <div className="flex flex-col">
          <span className="text-lg">Editar tarefa</span>

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
            className="appearance-none h-32 resize-none border rounded-lg w-full py-2 px-3 text-gray-700"
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
          </div>
          <Button
            name="Editar!"
            type="submit"
          />

        </div>
      </form>
    </Modal>
  )
}