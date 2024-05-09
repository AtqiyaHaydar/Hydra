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
      <Card className={cn('bg-gradient-to-r transition-all min-w-[100px] h-[50px] flex items-center justify-center hover:bg-opacity-75  p-[1px]', className)}>
        <div className='w-full h-full bg-dark/95 px-4 hover:bg-dark/10 flex items-center justify-center rounded-md transition-all'>
          <h1 className='font-medium text-sm text-center'>{title}</h1>
        </div>
      </Card>
    </Link>
    
  )
}

export default LearningResourceCard