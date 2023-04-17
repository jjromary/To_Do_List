import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';
import { TaskProvider } from "./Contexts/TasksContext";
import { Router } from "./Router";

import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Router />
        <ToastContainer
          autoClose={3000}
          closeOnClick
        />

      </TaskProvider>
    </BrowserRouter>
  )
}