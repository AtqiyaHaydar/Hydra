"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import NavItems from './NavItems'

const Sidebar = () => {
  const router = useRouter()

  return (
    <div className='px-4 py-8 fixed left-0 top-0 w-[275px] h-screen border-r border-white/10 flex flex-col items-center gap-20'>
      {/* Header */}
      <h1 className='w-full text-center font-bold text-2xl font-ethnocentric'>Hydra</h1>
      
      {/* Nav Items */}
      <div className='flex-1 w-full'>
       <NavItems />
      </div>

      {/* Footer */}
      <Button className='w-[200px]'>
        Login 
      </Button>
    </div>
  )
}

export default Sidebar