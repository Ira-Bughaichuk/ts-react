import React, {FC} from 'react'
import {Task} from  '../todoSlice';

interface ITodoItemProps {
  //todo:{id:number; text: string};
  todo: Task;
  onDelate: (id:number) => void;
}

const TodoItem:FC<ITodoItemProps> = ({todo, onDelate}) => {  
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={()=> onDelate(todo.id)}>Delate</button>
    </li>
  )
}
export default TodoItem;