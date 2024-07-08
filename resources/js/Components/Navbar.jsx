import React from 'react'
import { Link, Head } from '@inertiajs/react';
import NavLink from './NavLink';
const Navbar = ({auth}) => {
const linkClass = ({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  return (
    <>
  	
    <nav className="bg-violet-700 border-b border-violet-500 sticky scroll top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" href="/">
              
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Bedspace</span
              >
            </NavLink>
            <div className="md:ml-auto">
            
              <div className="flex space-x-2">
              <NavLink
                  href=""
                  className={linkClass}
                  >About</NavLink
                >
                <NavLink
                  href=""
                  className={linkClass}
                  >Become A Host</NavLink
                >
              {auth.user ? (
                <NavLink
                  href={route('dashboard')}
                  className={linkClass}
                  active={route().current('dashboard')}
                  >Dashboard</NavLink
                >
                ) : (
                  <>
                <NavLink
                  href={route('login')}
                  className={linkClass}
                  >Login</NavLink
                >
                <NavLink
                 href={route('register')}
                  className={linkClass}
                  >Register</NavLink
                >
                </>
                )}


              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar