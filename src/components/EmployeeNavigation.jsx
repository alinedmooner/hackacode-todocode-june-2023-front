import React from 'react'

function EmployeeNavigation () {
  return (
    <nav>
      <h1>Employee Status</h1>
      <ul>
        <li>
          <a href="/employee">Home</a>
        </li>
        <li>
          <a href="/employee/attractions">Attractions</a>
        </li>
        <li>
          <a href="/employee/categories">Categories</a>
        </li>
        <li>
          <a href="/employee/employees">Employees</a>
        </li>
        <li>
          <a href="/employee/visitors">Visitors</a>
        </li>
        <li>
          <a href="/employee/visits">Visits</a>
        </li>
      </ul>
      <div>
        <a href="/employee/logout">Logout</a>
      </div>
    </nav>
  )
}

export default EmployeeNavigation
