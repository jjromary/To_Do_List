import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { Task, TaskContext } from '../../Contexts/TasksContext';
import useRecover from '../../Hooks/useRecover';
import Button from '../Button';

interface ModalDeleteProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
}


export default function ModalDelete({ id, isOpen, onRequestClose }: ModalDeleteProps) {
  const [recoverArrayLocal, setRecoverArrayLocal] = useState<Task[]>([])

  const { recoverTasksToLocal } = useRecover()

  const { setUpdateTask, updateTask } = useContext(TaskContext)

  const navigate = useNavigate();
  const localtion = useLocation()

  const updateTaksList = () => {
    setUpdateTask(updateTask + 1);
  }

  const handleDeleteTask = () => {

    const numberIndex = recoverArrayLocal.findIndex((foundIndex) => foundIndex.id === id)

    if (recoverArrayLocal) {
      recoverArrayLocal.splice(numberIndex, 1);
      localStorage.setItem('keyTask', JSON.stringify(recoverArrayLocal));
    }

    if (localtion.pathname === `/task/${id}`) {
      navigate('/')
    }

    updateTaksList()
    onRequestClose()

  }

  useEffect(() => {
    setRecoverArrayLocal(recoverTasksToLocal)
  }, [])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-edit-overlay"
      className="react-modal-delete-content"
    >
      <div className='h-full flex flex-col items-center'>

        <span className="w-full flex items-center justify-center mt-4 text-gray-700 text-xl font-bold ">
          Você realmente deja deletar esta terefa?
        </span>

        <div className='w-full h-full flex flex-col justify-center gap-8' >
          <Button
            name='Sim'
            type='button'
            onClick={handleDeleteTask}
          />
          <Button
            name='Não'
            type='button'
            status='cancel'
            onClick={onRequestClose}
          />
        </div>

      </div>

    </Modal>
  )
}