import React from 'react'
import { Plus } from 'lucide-react'

import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const AddTask = () => {
  return (
    <div className="card-wrapper">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"} 
            className='text-center w-[275px] flex gap-x-4'
          >
            <Plus className='w-5 h-5'/> Add Task
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Task Detail</DialogHeader>
        </DialogContent>
      </Dialog>
      
    </div>
  )
}

export default AddTask