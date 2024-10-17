import Link from 'next/link'
import React from 'react'
import { NavBarComponent } from './nav-bar.component'

export const HeaderComponent = () => {
  return (
    <header className="bg-gray-900 text-white">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/" className="hover:text-gray-300">Mi Portafolio</Link>
      </div>

      {/* Navegación */}
      <NavBarComponent />
     
    </div>
  </header>
  )
}
