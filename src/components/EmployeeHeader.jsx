import React from 'react'
import image from '/images/employee_profile/aiony-haust-3TLl_97HNJo-unsplash.webp'

function EmployeeHeader () {
  return (
    <header className='employee-header'>
      <div className='header-item'>
        EN
      </div>
      <div className='header-item'>
        Dark
      </div>
      <div className='header-item'>
        Employee name
      </div>
      <div className='header-item'>
        <img className='profile-image' src={image} alt="Employee profile" />
      </div>
    </header>
  )
}

export default EmployeeHeader
