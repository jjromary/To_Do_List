import { House } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import notFound from '../../assets/notFound.gif';

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-start font-roboto text-5xl font-bold text-sky-950">
      <span className="w-full max-[425px]:text-4xl mt-8">Oops! Parece que você não está encontrado as suas tarefas...</span>
      <div className="mt-4">
        <img src={notFound} alt="gif not found" width={300} height={300} />
      </div>
      <span className="w-full text-xl font-extralight mt-8">Aqui está um links útil que vai te ajudar!</span>
      <div className="w-full flex justify-start mt-4 ">
        <Link to='/' className="flex items-center justify-center gap-4">Home <House size={48} /></Link>
      </div>
    </div>
  )
}