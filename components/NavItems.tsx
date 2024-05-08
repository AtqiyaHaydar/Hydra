import React from 'react'
import NavItem from './NavItem'

const navigation = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Tasks",
    href: "/tasks"
  },
  {
    title: "Projects",
    href: "/projects"
  }
]


const NavItems = () => {
  return (
    <ul className='flex flex-col w-full justify-center items-center gap-4'>
      {navigation.map((item, index) => (
        <NavItem key={index} title={item.title} href={item.href} />
      ))}
    </ul>
  )
}

export default NavItems