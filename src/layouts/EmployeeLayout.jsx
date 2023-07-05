import React from 'react'
import EmployeeHeader from '../components/EmployeeHeader'
import EmployeeNavigation from '../components/EmployeeNavigation'

function EmployeeLayout({ children }) {
  return <div className='employee-container'>
  <EmployeeNavigation />
  <section className="employee-dashboard">
    <EmployeeHeader />
    <main className='employee-test'>
      {children}
    </main>
  </section>
</div>
}

export default EmployeeLayout
