import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface TaskCardI {
  task: string
  date: number
  month: number
  project: string
  description: string
  status: string
}
 
const TaskCard = ({task, date, month, project, description, status} : TaskCardI) => {

  const formatMonth = (month: number) => {
    if (!date) return null;

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return monthNames[month - 1];
  };

  return (
    <div className='my-4 border py-6 px-8 rounded-xl flex flex-row justify-between items-center'>
      <div className='space-y-8 max-w-[900px]'>
        <div className='space-y-2'>
          <h1 className='text font-bold text-[20px]'>{task}</h1>
          <p className='font-light text-sm'>
            {description}
          </p>
        </div>
        <div className='flex flex-row gap-x-4 items-center'>
          <Button variant={"secondary"}>
            {project}
          </Button>
          <p className={cn(
            status === "Finished" ? "text-green-500" : "text-red-500"
          )}>
            {status}
          </p>
        </div>
      </div>
      <div>
        <p>{date} {formatMonth(month)}</p>
      </div>
    </div>
  )
}

export default TaskCard