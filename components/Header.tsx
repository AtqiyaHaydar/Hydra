import React from 'react';

import { ModeToggle } from './theme-toggle'

const Header = () => {
  return (
    <div className="card-wrapper w-full flex justify-between items-center ">
      <h1 className="md:text-xl font-light">KSEP Operations Project Manager</h1>
      <ModeToggle />
    </div>
  )
}

export default Header