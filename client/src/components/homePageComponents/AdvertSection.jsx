import React from 'react'

const AdvertSection = () => {
  return (
    <div className='hero-slider'>
      <div className='hero-text-container'>
        <h1>Предоставляем высококачественные медицинские услуги</h1>
        <p>Добро пожаловать в наш медицинский центр, здесь ваше здоровье является нашим приоритетом. Наша команда опытных специалистов стремится обеспечить индивидуальный и всесторонний уход в соответствии с вашими уникальными потребностями.</p>
        <button type='button' className='button-Appointment'>Запись</button>
        <button type='button' className='button-About'>Подробнее...</button>
      </div>
      <img src="https://i.pinimg.com/564x/ab/5c/8d/ab5c8de675d0bd9fa1e8a9a22603a1ba.jpg" alt="Dad and Child" />
    </div>
  )
}

export default AdvertSection