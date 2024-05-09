import React from 'react'

import { Card } from "@/components/ui/card"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface LearningResourceCardI {
  title: string
  link: string
  image: string
  className: string
}

const LearningResourceCard = ({ title, link, image, className } : LearningResourceCardI) => {
  return (
    <Link href={link} target='_blank'>
      <Card className={cn('bg-gradient-to-r w-[250px] h-[125px] flex items-center justify-center hover:bg-opacity-75', className)}>
        <div className='w-full h-full flex items-center justify-center bg-white/10 hover:bg-dark/10 rounded-md transition-all'>
          <h1 className='font-medium'>{title}</h1>
        </div>
      </Card>
    </Link>
    
  )
}

export default LearningResourceCard