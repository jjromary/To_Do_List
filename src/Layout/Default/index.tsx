import { Outlet } from "react-router";
import Header from "../../Components/Header";

export default function DefaultLayout() {
  return (
    <div className="container max-w-[1120px] h-auto px-4 flex flex-col items-center pb-8 ">
      <Header />

      <Outlet />
    </div>

  )
}