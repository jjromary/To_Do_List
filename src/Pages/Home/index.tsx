import TaskCard from "../../Components/TaskCard";
import TaskCreator from "../../Components/TaskCreator";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <>
      <TaskCreator />

      <TaskList>

        <TaskCard
          title="Estudar pra ter uma perspetiva de vida melhor Estudar pra ter uma perspetiva de vida melhorEstudar pra ter uma perspetiva de vida melhor"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          status="Em andamento"
          created_at="11/04/2023"
        />
        <TaskCard
          title="Levar paçoca no veterinário"
          description="Estude! Mas n estude pra se matar! Estude! Mas n estude pra se matar! Estude! Mas n estude pra se matar! Estude! Mas n estude pra se matar!"
          status="Pendente"
          created_at="11/04/2023"
        />
        <TaskCard
          title="Lavar o banheiro"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          status="Concnluído"
          created_at="11/04/2023"
        />


      </TaskList>

    </>
  )
}