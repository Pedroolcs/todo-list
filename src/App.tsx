import * as C from './App.styles'
import { useState } from 'react';
import { Item } from './types/Item';
import ListItem from './components/ListItem';
import AddArea from './components/AddArea';

function App() {

  const [list, setList] = useState<Item[]>([])
  
  function handleAddTask(taskName : string) {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);  
  }

  function handleTaskChange(id: number, done: boolean) {
    let newList = [...list]
    for (let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done
      }
    }
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask}/>

          {list.map((item, index) =>(
            <ListItem 
              item={item} 
              key={index} 
              onChange={handleTaskChange}
            />
          ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
