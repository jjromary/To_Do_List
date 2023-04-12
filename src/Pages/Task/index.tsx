import TaskCard from "../../Components/TaskCard";

export default function Task() {
  return (
    <div className="container h-screen flex items-center justify-center">

      <TaskCard
        title="Estudar pra ter uma perspetiva de vida melhor Estudar pra ter uma perspetiva de vida melhorEstudar pra ter uma perspetiva de vida melhor"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        status="Em andamento"
        created_at="11/04/2023"
      />
    </div>
  )
}