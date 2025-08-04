import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  return (
        <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-700">Point of Care Lab</a>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-700">Home</a>
          <a href="/about" className="hover:text-blue-700">About</a>
          <a href="/services" className="hover:text-blue-700">Services</a>
          <a href="/blog" className="hover:text-blue-700">Blog</a>
          <a href="/contact" className="hover:text-blue-700">Contact</a>
          <a href="/book" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Book</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
