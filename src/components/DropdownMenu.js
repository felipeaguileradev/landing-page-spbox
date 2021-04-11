import React from 'react'
import { NavLink } from 'react-router-dom'

const DropdownMenu = ({ toggle }) => {
  return (
    <div className="sm:hidden" id="mobile-menu" onClick={toggle}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavLink
          exact
          activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
        >
          Inicioooooo
        </NavLink>

        <NavLink
          exact
          activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/proyectos"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Proyectos
        </NavLink>
      </div>
    </div>
  )
}

export default DropdownMenu
