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
    <div className={cn(
      'my-4 border rounded-xl bg-gradient-to-r relative overflow-hidden',
      )}>
      <div className={cn(
        'overflow-hidden flex flex-row justify-between items-center text-dark bg-dark rounded-xl px-8 py-6 bg-gradient-to-r max-h-[200px]',
        status === "Finished" && "gradient-6",
        status === "Unfinished" && date - new Date().getDate() <= 7 &&  "bg-gradient-to-l gradient-2 text-white",
        status === "Unfinished" && date - new Date().getDate() > 7 &&  "gradient-3 text-white",
      )}>
        <div className='space-y-8 max-w-[900px]'>
          <div className='space-y-2'>
            <h1 className='text font-bold text-[20px]'>{task}</h1>
            <p className=' text-sm'>
              {description}
            </p>
          </div>
          <div className='flex flex-row gap-x-4 items-center'>
            <Button variant={"secondary"}>
              {project}
            </Button>
            <p className={cn(
              "px-4 py-2.5 bg-white rounded-md text-[14px] font-semibold",
              status === "Finished" ? "text-green-500" : "text-red-500"
            )}>
              {status}
            </p>
          </div>
        </div>
        <div>
          <p className='font-medium text-dark'>{date} {formatMonth(month)}</p>
        </div>

        <div className='absolute right-[-75px] bg-white/25 h-[250px] w-[250px] rounded-full'>

        </div>
      </div>
    </div>
  )
}

export default TaskCard