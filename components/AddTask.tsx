import React from 'react'
import { Plus } from 'lucide-react'

import { Button } from './ui/button'

const AddTask = () => {
  return (
    <div className="card-wrapper">
      <Button variant={"ghost"} className='text-center w-[275px] flex gap-x-4'>
        <Plus className='w-5 h-5'/> Add Task
      </Button>
    </div>
  )
}

export default AddTask