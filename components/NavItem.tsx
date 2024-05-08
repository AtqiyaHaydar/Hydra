"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

interface NavItemI {
  title: string
  href: string
}

const NavItem = ({ title, href }: NavItemI) => {
  const pathname = usePathname()
  
  return (
    <Button variant={pathname === href ? "secondary" : "ghost"} className='text-center w-[200px]'>
      <Link href={href}>
        {title}
      </Link>
    </Button>
  )
}

export default NavItem