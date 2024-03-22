import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeCard = ({ employee, isShowButton }) => {

  return (
    <div className='employee-card'>
      <img src={employee.img} alt='Фото сотрудника'></img>
      <h2>{employee.name}</h2>
      <h3>{employee.specialization}</h3>
      {isShowButton &&
        <Link to={`/employees/${employee.id}`}>
          <button className='button-About'>Подробнее</button>
        </Link>

      }
    </div>
  )
}

export default EmployeeCard