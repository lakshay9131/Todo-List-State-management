import * as React from 'react';
import './style.css';
import List from './List.js';

export default function App() {
  const [todos, set] = React.useState([
    { id: 1, text: 'task1', category: 1 },
    { id: 2, text: 'task2', category: 2 },
    { id: 3, text: 'task3', category: 3 },
    { id: 4, text: 'task4', category: 4 },
  ]);
  function move(direction, id) {
    // direction is 1 then right else left
    console.log('direction ', direction, id);
    
    set(todos.map((elem)=>{
      if(elem.id!=id){
        return elem;
      }
      else{
        elem["category"]=direction==1?elem["category"]+1:elem["category"]-1;
        return elem;
      }
    }))
  }
  return (
    <div>
      <List li={todos} move={move} />

      <p>l--Left && r--Right</p>
    </div>
  );
}
