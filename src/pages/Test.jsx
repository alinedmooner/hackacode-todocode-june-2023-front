import React from 'react'
import EmployeeNavigation from '../components/EmployeeNavigation'
import EmployeeHeader from '../components/EmployeeHeader'

function Test () {
  return <div className='employee-container'>
    <EmployeeNavigation />
    <section className="employee-dashboard">
      <EmployeeHeader />
      <main className='employee-test'>
        <h1>Test</h1>
      </main>
    </section>
  </div>
}

export default Test
