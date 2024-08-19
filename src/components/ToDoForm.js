import React, {useState} from 'react'

export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value) {
            addTodo(value);

            setValue('');
        }
        
    };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' value={value} type='text' placeholder='What are the tasks today???' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
