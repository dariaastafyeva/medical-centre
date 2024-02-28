import React from 'react'

import { Logo } from './Logo.js'

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='footer'>
        <Logo />
        <div className='text' >
          <h3>О&nbsp;компании</h3>
          <p>Услуги</p>
          <p>Контакты</p>
          <p>Запись</p>
          <p>FAQs</p>
        </div>
        <div className='text'>
          <h3>Блог</h3>
          <p>Правила пользования</p>
          <p>Политика безопасности</p>
        </div>
        <div className='text'>
          <h3>Карьера</h3>
          <p>Партнеры</p>
          <p>Мадиа</p>
          <p>события</p>
          <p>Поддержка</p>
          <p>FAQs</p>
        </div>
        <div className='subscribe-form'>
          <h3>Подписаться</h3>
          <p>Присоединяйтесь к нашему сообществу, чтобы получать обновления и эксклюзивные предложения.</p>
          <label for='email'>Адрес вашей электронной почты</label>
          <div className='input-group'>
            <input type='text' name='email'></input>
            <button className='button-Appointment'>Присоединиться</button>
          </div>
          <h5>Присоединяясь, вы соглашаетесь с нашими Положениями и условиями.</h5>
        </div>
      </div>
      
      <hr/>

      <div className='rights'>
        <p>© 2023 AstaGroup. Все права защищены.</p>
        <p>политика конфиденциальности</p>
        <p>Использование файлов cookie</p>
      </div>
    </div>
  )
}

export default Footer