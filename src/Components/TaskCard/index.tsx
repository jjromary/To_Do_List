import { Circle, Pencil, Trash } from "@phosphor-icons/react";

interface TaskCardprops {
  id?: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
}

export default function TaskCard({ id, title, created_at, description, status }: TaskCardprops) {
  return (
    <div className="w-full flex flex-col rounded-lg p-4 border-2 border-sky-600 text-gray-700 max-[425px]:text-sm">

      <div className="w-full flex items-center justify-between max-[768px]:flex-col ">

        <div className="w-auto flex items-center justify-start max-[768px]:justify-between max-[768px]:w-full max-[425px]:flex-col max-[425px]:items-start">
          <span className="w-9/12 font-bold line-clamp-1 overflow max-[425px]:w-full max-[425px]:line-clamp-2" >{title}</span>
          <span className=" flex items-center text-right pl-4 font-bold  max-[425px]:pl-0 max-[425px]:mt-4"><Circle size={16} />{status}</span>
        </div>

        <div className="w-44 flex items-center justify-between max-[768px]:mt-4 max-[768px]:w-full ">
          <span className="font-bold">{created_at}</span>
          <div className="w-16 flex items-center justify-between ">
            <button>
              <Pencil size={28} />
            </button>
            <button>
              <Trash size={28} />
            </button>
          </div>
        </div>

      </div>

      <span className="h-auto mt-4 text-sm border-t-2 pt-4 break-all">{description}</span>

    </div>
  )
}