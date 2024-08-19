import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value) {
            editTodo(value, task.id);

            setValue('');
        }
        
    };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input className='todo-input' value={value} type='text' placeholder='What are the tasks today???' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
