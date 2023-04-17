import { ArrowSquareOut, Pencil, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";
import StatusTask from "../StatusTask";

interface TaskCardprops {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
}

export default function TaskCard({ id, title, created_at, description, status }: TaskCardprops) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)


  const navigate = useNavigate()
  const location = useLocation()

  const goToTaskPage = () => {
    navigate(`/task/${id}`)
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true)
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false)
  }

  function handleOpenEditModal() {
    setIsEditModalOpen(true)
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false)
  }

  return (
    <div className="w-full max-h-72  flex flex-col rounded-lg p-4 border-2 border-sky-600 text-gray-700 shadow-lg max-[425px]:text-sm ">

      <div className="w-full flex items-center justify-between max-[768px]:flex-col ">

        <div className="w-3/5 flex items-center justify-start max-[768px]:justify-between max-[768px]:w-full max-[425px]:flex-col max-[425px]:items-start">
          <span className="w-full font-bold text-ellipsis overflow-hidden max-[425px]:w-full max-[425px]:line-clamp-2" >
            {title}
          </span>
        </div>

        <div className="w-2/5 flex items-center justify-between max-[768px]:mt-4 max-[768px]:w-full ">

          <span className="w-32 h-6 flex items-center text-right text-sm capitalize pl-4 max-[768px]:pl-0 gap-4">
            <StatusTask currentState={status} />
          </span>

          <div className="w-20 flex flex-col items-center justify-between max-[320px]:w-auto">

            <div>
              <span className="text-sm">
                {created_at}
              </span>
            </div>

            <div className="w-full mt-1 flex items-center justify-between">
              <button type="button" onClick={handleOpenEditModal}>
                <Pencil size={18} />
              </button>

              <button onClick={handleOpenDeleteModal}>
                <Trash size={18} />
              </button>
              {location.pathname === '/' &&
                <button onClick={goToTaskPage}>
                  <ArrowSquareOut size={18} />
                </button>
              }
              <ModalEdit
                isOpen={isEditModalOpen}
                onRequestClose={handleCloseEditModal}
                id={id}
                status={status}
                title={title}
                description={description}

              />

              <ModalDelete
                isOpen={isDeleteModalOpen}
                onRequestClose={handleCloseDeleteModal}
                id={id}
              />

            </div>

          </div>

        </div>

      </div>

      <span className="h-auto overflow-y-auto mt-4 text-sm border-t-2 pt-4 break-words">
        {description}
      </span>
    </div>

  )
}