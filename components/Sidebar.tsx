import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import NavItems from './NavItems'
import { LogIn } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='px-4 py-8 fixed left-0 top-0 w-[275px] h-screen border-r border-white/10 flex flex-col items-center bg-dark gap-20'>
      {/* Header */}
      <h1 className='w-full text-center font-bold text-2xl font-ethnocentric'>
        <Link href="/">
          Hydra
        </Link>
      </h1>
      
      {/* Nav Items */}
      <div className='flex-1 w-full'>
       <NavItems />
      </div>

      {/* Footer */}
      <Button className='w-[200px] flex items-center gap-x-2 hover:gap-x-4 transition-all'>
        Login  <LogIn size={16} />
      </Button>
    </div>
  )
}

export default Sidebar