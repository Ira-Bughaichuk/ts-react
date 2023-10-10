import React, {useState, FC, FormEvent, ChangeEvent} from 'react'

interface IAddTodoFormProps {
  onAdd: (text: string) => void;
}
const AddTodoForm: FC<IAddTodoFormProps> = ({onAdd}) => {
  const [newTodo, setNewTodo]= useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  }
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="New todo" value={newTodo} onChange={(e:ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  )
}
export default AddTodoForm;