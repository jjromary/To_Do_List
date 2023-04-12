import { Outlet } from "react-router";
import Header from "../Components/Header";
export default function DefaultLayout() {
  return (
    <div className="container h-screen px-4 flex flex-col items-center">
      <Header />

      <Outlet />
    </div>

  )
}