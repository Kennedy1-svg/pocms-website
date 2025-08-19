import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-poc-red-bg">
          Point of Care Lab
        </a>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-poc-red">
            Home
          </a>
          <a href="/about" className="hover:text-poc-red">
            About
          </a>
          <a href="/services" className="hover:text-poc-red">
            Services
          </a>
          <a href="/blog" className="hover:text-poc-red">
            Blog
          </a>
          <a href="/contact" className="hover:text-poc-red">
            Contact
          </a>
          <a href="/book" className="bg-poc-red-bg text-white px-4 py-2 rounded hover:bg-poc-red">
            Book
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
