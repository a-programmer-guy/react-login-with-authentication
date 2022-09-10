import React, { useState } from 'react'
import { Form } from 'reactstrap'

const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = () =>{
    console.log('submit')
  }
  return (
    <Form className='add-task-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='add-task'>Task</label>
        <input
          className='task-input'
          type='text'
          placeholder='Add task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label htmlFor='task-date'>Day & Time </label>
        <input
          className='task-input'
          type='text'
          value={day}
          placeholder='Add day and time'
          onChange={(e) => setDay(e.target.value)}
        />
        </div>
        <div className='form-control-check'>
        <label htmlFor='task-reminder' >Set Reminder</label>
        <input
          type='checkbox'
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        </div>
        <input className='btn-block'type='submit' value='Save Task' />
    </Form>
  )
}

export default AddTask