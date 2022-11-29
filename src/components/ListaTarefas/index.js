import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["Estudar", "Dormir", "Jantar"]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if(novaTarefa.length <3 ) {
      return alert("É necessário passar mais de 3 caractéres")
    }
    const novaLista = [...lista, novaTarefa]
    setLista(novaLista)
    setNovaTarefa("")
  };

  const removeTarefa = (tarefas) => {
    const novaLista = lista.filter((tarefa) => {
      if(tarefas !== tarefa) {
        return tarefa
      }
    })
    const novaLista2 = lista.filter(tarefa => tarefas !== tarefa);
    setLista(novaLista2)
  };

  const tarefas = lista.map((tarefa, indice) => {
    return (

      <ListaContainer key={indice}>
        <ul>
          <Tarefa>
            <p>{tarefa}</p>
            <RemoveButton onClick={()=>removeTarefa(tarefa)}>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
          </Tarefa>
        </ul>
      </ListaContainer>
      // <ul key={tarefa}>
      //     <li>{tarefa}</li>
      // </ul>
      )
  });


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      {tarefas}
    </ListaTarefasContainer>
  );
}
