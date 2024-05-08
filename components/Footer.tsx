import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='text-right w-full fixed bottom-4 right-8'>
      <p className='text-sm font-light px-2 py-1'> 
        <Link href="https://www.linkedin.com/in/atqiyahaydar/" target='_blank' className='hover:text-[#a254f2] hover:font-bold transition-all'>
          Atqiya Haydar
        </Link>. 
        Created With ❤️ by {" "}
        <Link href="https://ui.shadcn.com/" target='_blank' className='hover:text-[#efbad3] hover:font-bold transition-all'>
          Shadcn UI  
        </Link>
      </p>
    </div>
  )
}

export default Footer