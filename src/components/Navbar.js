import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ButtonMenu from './ButtonMenu'
import DropdownMenu from './DropdownMenu'

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  useEffect(() => {
    const hiddenMenu = () => {
      if (window.innerWidth > 768 && isOpenMenu) {
        setIsOpenMenu(false)
        console.log('cierro el menu')
      }
    }

    window.addEventListener('resize', hiddenMenu)

    return () => {
      window.removeEventListener('resize', hiddenMenu)
    }
  }, [window.innerWidth])

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <ButtonMenu isOpenMenu={isOpenMenu} toggle={toggle} />

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="block h-12 w-auto"
                  src="http://spboxweb.azurewebsites.net/images/logo-spbox.png"
                  alt="Workflow"
                />
              </Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  exact
                  activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Inicio
                </NavLink>

                <NavLink
                  exact
                  activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/proyectos"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projectos
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenMenu && <DropdownMenu toggle={toggle} />}
    </nav>
  )
}
