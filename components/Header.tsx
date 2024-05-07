import React from 'react';

import { ModeToggle } from './theme-toggle'

const Header = () => {
  return (
    <div className="header-wrapper w-full flex justify-between items-center ">
      <h1 className="md:text-xl font-bold">KSEP Operations Project Manager</h1>
      <ModeToggle />
    </div>
  )
}

export default Header