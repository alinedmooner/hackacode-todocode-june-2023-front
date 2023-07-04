import React from 'react'

function EmployeeNavigation () {
  return (
    <nav className='employee-navigation'>
      <h1 className='dashboard-title main-text'>Employee Status</h1>
      <div className='employee-list'>
          <div className='employee-list-group'>
            <a className='employee-list-element' href="/employee">Home</a>
            <a className='employee-list-element' href="/employee/attractions">Attractions</a>
            <a className='employee-list-element' href="/employee/categories">Categories</a>
            <a className='employee-list-element' href="/employee/employees">Employees</a>
            <a className='employee-list-element' href="/employee/visitors">Visitors</a>
            <a className='employee-list-element' href="/employee/visits">Visits</a>
          </div>
          <a className='employee-list-element employee-logout' href="/employee/logout">Logout</a>
      </div>
    </nav>
  )
}

export default EmployeeNavigation
