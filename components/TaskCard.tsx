import React from 'react'

interface TaskCardI {
  task: string
  date: number
  month: number
  project: string
  description: string
}
 
const TaskCard = ({task, date, month, project, description} : TaskCardI) => {
  return (
    <div className='my-3 border p-4 rounded-xl'>
      <div className='space-y-2'>
        <h1 className='text font-bold'>{task}</h1>
        <p className='font-light text-sm'>
          {description}
        </p>
      </div>
     
    </div>
  )
}

export default TaskCard