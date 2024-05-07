import React from 'react'
import { Calendar } from './ui/calendar'

const CalendarToday = () => {
  return (
    <div className='card-wrapper flex flex-col gap-y-4 items-center'>
      <h2 className='text-center'>What Day is Today?</h2>
      <Calendar />
    </div>
  )
}

export default CalendarToday