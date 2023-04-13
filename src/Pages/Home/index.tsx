import moment from "moment";
import { useContext, useMemo } from "react";
import TaskCard from "../../Components/TaskCard";
import TaskCreator from "../../Components/TaskCreator";
import { Task, TaskContext } from "../../Contexts/TasksContext";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";


export default function Home() {
  const { task, filterStatus } = useContext(TaskContext)

  const dateFormat = (newDate: string) => {
    newDate = moment().locale('pt-br').format('DD/MM/YYYY')

    return newDate
  }

  const sortByDate = (tasks: Task[]) => {
    return tasks.map(task => ({ ...task, created_at: new Date(task.created_at) }))
      .sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB.getTime() - dateA.getTime();
      });
  }

  const orderedTasksByDate = sortByDate(task)

  const filteredTaskByStatus = useMemo(() => {
    return orderedTasksByDate.filter((FilteredList) => FilteredList.status.includes(filterStatus))
  }, [orderedTasksByDate])

  return (
    <>
      <TaskCreator />

      <TaskFilter />

      <TaskList>
        {filteredTaskByStatus.map((taskItem) => {
          return (
            <TaskCard
              key={taskItem.id}
              id={taskItem.id}
              title={taskItem.title}
              description={taskItem.description}
              status={taskItem.status}
              created_at={dateFormat(String(taskItem.created_at))}
            />
          )
        })}
      </TaskList>

    </>
  )
}