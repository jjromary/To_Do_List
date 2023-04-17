import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./Layout/Default";
import Home from "./Pages/Home";
import NotFound from "./Pages/Notfound";
import TaskDetails from "./Pages/TaskDetails";

export function Router() {
  return (
    <Routes>

      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/task/:id' element={<TaskDetails />} />
        <Route path='/*' element={<NotFound />} />
      </Route>

    </Routes>
  )
}