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
    <div className={cn('rounded-md flex justify-between pl-3 items-center mr-4 my-3 cursor-pointer transition-all duration-50', backgroundColor)}>
      <div className='w-full bg-dark h-full border flex flex-row items-center justify-between py-4 px-4 rounded-r-md'>
        <div>
          <h1 className='font-bold'>{task}</h1>
          <p className='text-sm'>{project}</p>
        </div>
      
        <p className={cn('text-sm  bg-white/10 rounded-sm p-2 px-4 font-medium', backgroundColor)}>
          {date} {convertMonth(month)}
        </p>  
      </div>
    
    </div>
  )
}

export default NotificationsCard