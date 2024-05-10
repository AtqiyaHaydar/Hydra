import React from 'react'

interface TaskCardI {
  task: string
  date: number
  month: number
  project: string
  description: string
}
 
const TaskCard = ({task, date, month, project, description} : TaskCardI) => {

  const formatMonth = (month: number) => {
    if (!date) return null;

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return monthNames[month - 1];
  };

  return (
    <div className='my-3 border p-4 rounded-xl flex flex-row justify-between items-center'>
      <div className='space-y-2 max-w-[1000px]'>
        <h1 className='text font-bold'>{task}</h1>
        <p className='font-light text-sm'>
          {description}
        </p>
      </div>
      <div>
        <p>{date} {formatMonth(month)}</p>
      </div>
    </div>
  )
}

export default TaskCard