import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { Task } from '../../Contexts/TasksContext';
import Button from '../Button';

interface ModalDeleteProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
}


export default function ModalDelete({ id, isOpen, onRequestClose }: ModalDeleteProps) {
  const [recoverArrayLocal, setRecoverArrayLocal] = useState<Task[]>([])
  const refresh = useNavigate();

  const refreshPage = () => {
    refresh(0);
  }

  const recoverTasksLocalStorage = () => {
    const recover = localStorage.getItem('keyTask')
    const recoverToJson = JSON.parse(recover!)

    setRecoverArrayLocal(recoverToJson)
  }

  const handleDeleteTask = () => {

    const numberIndex = recoverArrayLocal.findIndex((foundIndex) => foundIndex.id === id)

    if (recoverArrayLocal) {
      recoverArrayLocal.splice(numberIndex, 1);
      localStorage.setItem('keyTask', JSON.stringify(recoverArrayLocal));
    }
    refreshPage()
  }

  useEffect(() => {
    recoverTasksLocalStorage()
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