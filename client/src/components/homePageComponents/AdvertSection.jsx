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
      <img src="dad_child_white.jpg" alt="Dad and Child" />
    </div>
  )
}

export default AdvertSection