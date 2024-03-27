import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeCard = ({ employee, isShowButton }) => {

  return (
    <div className='employee-card'>
      <img src={employee.img} alt='Фото сотрудника'></img>
      <h4>{employee.name}</h4>
      <p>{employee.specialization}</p>
      {isShowButton &&
        <Link to={`/employees/${employee.id}`}>
          <button className='button-About'>Подробнее</button>
        </Link>

      }
    </div>
  )
}

export default EmployeeCard