import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./Contexts/TasksContext";
import { Router } from "./Router";

export default function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Router />
      </TaskProvider>
    </BrowserRouter>
  )
}