import React, {useState} from 'react'
import moment from 'moment'


const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
        <div>
          <h4 className="text-lg font-bold text-poc-red mb-2">Point of Care Lab</h4>
          <p className="text-gray-600 text-sm">
            Reliable diagnostic services with a focus on patient care and quick turnaround.
          </p>
        </div>
        <div>
          <h5 className="text-md font-semibold text-poc-red mb-2">Quick Links</h5>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li>
              <a href="/services" className="hover:text-poc-red-bg">
                Services
              </a>
            </li>
            <li>
              <a href="/book" className="hover:text-poc-red-bg">
                Book Appointment
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-poc-red-bg">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-md font-semibold text-poc-red mb-2">Contact</h5>
          <p className="text-gray-600 text-sm">
            Email: info@pointofcarelab.com
            <br />
            Phone: +234 800 000 0000
            <br />
            Address: 123 Lab Street, Lagos, Nigeria
          </p>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Point of Care Lab. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
