import { useCallback, useEffect, useState } from "react"
import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService';
import { ApiException } from "../../shared/services/api/ErrorException";

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  useEffect(() => {
    TarefasService.getAll()
    .then((result) => {
        if(result instanceof ApiException)  {
          alert(result.message);
        } else {
          setLista(result);
        }
    });
  }, []);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value
      e.currentTarget.value = '';

      if (lista.some(ListItem => ListItem.title === value)) return;

      TarefasService.create({
        title: value,
        isCompleted: false,
      })
      .then((result) => {
        if(result instanceof ApiException)  {
          alert(result.message);
        } else {
          setLista((oldlista) => [...oldlista, result])
        }
      })
    }
  }, [lista]);

  const handleToggleComplete = useCallback((id: number) => {
    const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id)
    if (!tarefaToUpdate) return;

    TarefasService.updateById(id, {
      ...tarefaToUpdate,
      isCompleted: !tarefaToUpdate.isCompleted,
    })
    .then((result) => {
      if(result instanceof ApiException)  {
        alert(result.message);
      } else {
        setLista(oldLista => {
          return oldLista.map(oldListItem => {
            if(oldListItem.id === id) return result;
            return oldListItem;
          });
        })
      }
    })
  }, [lista])

  const handleDelete= useCallback((id: number) => {
    TarefasService.deleteById(id)
    .then((result) => {
      if(result instanceof ApiException)  {
        alert(result.message);
      } else {
        setLista(oldLista => {
          return oldLista.filter(oldListItem => oldListItem.id !== id);
        })
      }
    })
  }, [])

  return (
    <>
      <p>Lista</p>
      <input
        onKeyDown={handleInputKeyDown}
        type="text"
      />

      <p>{lista.filter((ListItem) => ListItem.isCompleted).length}</p>
      <ul>
        {lista.map((ListItem) => {
          return <li key={ListItem.id}>
            <input
              type="checkbox"
              checked={ListItem.isCompleted}
              onChange={() => handleToggleComplete(ListItem.id)}
            />
            {ListItem.title}


            <button onClick={() => handleDelete(ListItem.id)}>Deletar</button>
          </li>
        })}
      </ul>
    </>
  )
}