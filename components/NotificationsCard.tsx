import React from 'react'
import { cn } from '@/lib/utils'


interface NotificationsCardI {
  date: number
  month: number
  task: string
  project: string
  backgroundColor: string
}

const NotificationsCard = ({ date, month, task, project, backgroundColor } : NotificationsCardI) => {
  const convertMonth = (month: number) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return monthNames[month]
  }

  return (
    <div className={cn('rounded-md py-2 px-4 flex flex-roq justify-between items-center mr-4', backgroundColor)}>
      <div>
        <h1 className='font-bold'>{task}</h1>
        <p className='text-sm'>{project}</p>
      </div>
     
      <p className='text-sm bg-white/10 rounded-sm p-2 px-4'>{date} {convertMonth(month)}</p>
    </div>
  )
}

export default NotificationsCard