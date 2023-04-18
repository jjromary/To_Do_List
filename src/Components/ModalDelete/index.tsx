import { useContext } from 'react';
import Modal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TaskContext } from '../../Contexts/TasksContext';
import useRecover from '../../Hooks/useRecover';
import Button from '../Button';

interface ModalDeleteProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
}


export default function ModalDelete({ id, isOpen, onRequestClose }: ModalDeleteProps) {

  const { recoverTasksToLocal } = useRecover()

  const { setUpdateTask } = useContext(TaskContext)

  const navigate = useNavigate();
  const location = useLocation()

  const updateTaskList = () => {
    setUpdateTask(prev => prev + 1);
  }

  const handleDeleteTask = () => {

    const numberIndex = recoverTasksToLocal.findIndex((foundIndex) => foundIndex.id === id)

    if (recoverTasksToLocal) {
      recoverTasksToLocal.splice(numberIndex, 1);
      localStorage.setItem('keyTask', JSON.stringify(recoverTasksToLocal));
    }

    if (location.pathname === `/task/${id}`) {
      navigate('/')
    }

    updateTaskList()
    onRequestClose()
    toast.success("Tarefa DELETADA com sucesso!")
  }


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-edit-overlay"
      className="react-modal-delete-content"
    >
      <div className='h-full flex flex-col items-center'>

        <span className="w-full flex items-center justify-center mt-4 text-gray-700 text-xl font-bold ">
          Tem certeza de que deseja excluir esta tarefa?
        </span>

        <div className='w-full h-full flex flex-col justify-center gap-8' >
          <Button
            name='Sim'
            type='button'
            ariaLabel='Sim'
            onClick={handleDeleteTask}
          />
          <Button
            name='Não'
            type='button'
            status='cancel'
            ariaLabel='Não'
            onClick={onRequestClose}
          />
        </div>

      </div>

    </Modal>
  )
}