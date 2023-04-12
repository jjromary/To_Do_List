import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/";
import Home from "./Pages/Home";
import Task from "./Pages/Task";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/task' element={<Task />} />
      </Route>

    </Routes>
  )
}