import TaskCard from '@/components/TaskCard'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

const tasks = [
  {
    "task": "Landing Page Website",
    "date": 12,
    "month": 5,
    "project": "Website INFEST",
    "description": "This task involves creating the main landing page of the INFEST website. It serves as the primary entry point for visitors, designed to capture their attention and provide a brief overview of the services or products offered."
  },
  {
    "task": "Admin Dashboard",
    "date": 12,
    "month": 5,
    "project": "Website PTD",
    "description": "The Admin Dashboard is a crucial part of the PTD website designed for management and configuration of various aspects of the platform. It will provide an intuitive and efficient interface for admins to manage users, content, and site settings."
  },
  {
    "task": "Registration Form",
    "date": 12,
    "month": 5,
    "project": "Website INFEST",
    "description": "The Registration Form is a key element of the INFEST website allowing users to sign up or create a new account. It will contain the necessary fields for users to successfully register and interact with the platform."
  },
  {
    "task": "Registration Page",
    "date": 14,
    "month": 5,
    "project": "Website PTD",
    "description": "The Registration Page is part of the PTD website where users can register for an account. It will guide users through the registration process and capture required information to create their accounts."
  },
  {
    "task": "Assigment Page",
    "date": 14,
    "month": 5,
    "project": "Website PTD",
    "description": "The Assignment Page is a section of the PTD website dedicated to managing assignments or tasks. It will provide users with features to view, create, and manage assignments efficiently."
  },
  {
    "task": "Tasks Page",
    "date": 20,
    "month": 5,
    "project": "Website PTD",
    "description": "The Tasks Page is a component of the PTD website where users can view and manage their tasks. It will display tasks assigned to users, their status, and provide options for editing or completing them."
  },
  {
    "task": "Handbook Page",
    "date": 20,
    "month": 5,
    "project": "Website PTD",
    "description": "The Handbook Page is a section of the PTD website containing useful information, guidelines, or manuals. It will serve as a reference for users, providing comprehensive details on various aspects of the platform."
  },
  {
    "task": "Subject Page",
    "date": 24,
    "month": 5,
    "project": "Website PTD",
    "description": "The Subject Page is a dedicated section of the PTD website focusing on specific subjects or topics. It will provide detailed information, resources, and possibly interactive features related to the selected subjects."
  }
]



const Page = () => {
  return (
    <div className='wrapper space-y-8'>
      <div className='space-y-2'>
        <h1 className='font-bold text-2xl'>Your Tasks</h1>
        <p className='font-light'>Always finish your tasks before deadline 😉</p>
      </div>

      <ul>
        <ScrollArea className='overflow-hidden max-h-[550px] gap-y-4'>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                <TaskCard
                  task={task.task}
                  date={task.date}
                  month={task.month}
                  project={task.project}
                  description={task.description}
                />    
              </li>
            ) 
          })}
        </ScrollArea>
      </ul>
    </div>
  )
}

export default Page