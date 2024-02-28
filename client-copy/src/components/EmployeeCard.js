import React from 'react'

const EmployeeCard = ({ employee, isShowButton }) => {

  return (
    <div className='employee-card'>
      <img src={employee.img} alt='Фото сотрудника'></img>
      <h2>{employee.name}</h2>
      <h3>{employee.specialization}</h3>
      {isShowButton && <p>{employee.desc}</p>}

      {isShowButton && <button>Подробнее</button>}
    </div>
  )
}

export default EmployeeCard