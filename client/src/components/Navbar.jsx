import React from 'react'
import { Logo } from './Logo.js'


const Nabvar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <Logo />
        </div>
        <div className='name-container'>
          <h1 className='name'>медицинский центр</h1>
          <p>ПРИ ГОСУДАРСТВЕННОЙ АКАДЕМИИ ПРОМЫШЛЕННОГО МЕНЕДЖМЕНТА ИМЕНИ Н.П. ПАСТУХОВА</p>
        </div>
        <div className='head-nav'>
        <ul className='head-nav--list'>
          <li className='head-nav--item'>
            <div className='link head-nav--link'>
              <span className='link--cont'>
                <span className='link--text'>О компании</span>
                <span className='link--icon'>
                  <svg width='20px' viewBox="0 0 24 24">
                    <title></title>
                    <path class="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fill-rule="evenodd"></path>
                    </svg>
                </span>
              </span>
            </div>
          </li>
          <li className='head-nav--item'>
            <div className='link head-nav--link'>
              <span className='link--cont'>
                <span className='link--text'>Врачи</span>
                <span className='link--icon'>
                  <svg viewBox="0 0 24 24">
                    <title></title>
                    <path class="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fill-rule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </div>
          </li>
          <li className='head-nav--item'>
            <div className='link head-nav--link'>
              <span className='link--cont'>
                <span className='link--text'>Услуги</span>
                <span className='link--icon'>
                  <svg viewBox="0 0 24 24">
                    <title></title>
                    <path class="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fill-rule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </div>
          </li>
          <li className='head-nav--item'>
            <div className='link head-nav--link'>
              <span className='link--cont'>
                <span className='link--text'>Контакты</span>
                <span className='link--icon'>
                  <svg viewBox="0 0 24 24">
                    <title></title>
                    <path class="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fill-rule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </div>
          </li>
          <li className='head-nav--item'>
            <div className='link head-nav--link'>
              <span className='link--cont'>
                <span className='link--text'>Отзывы</span>
                <span className='link--icon'>
                  <svg viewBox="0 0 24 24">
                    <title></title>
                    <path class="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fill-rule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </div>
          </li>
          <li className='head-nav--item'>
            <div className='link head-nav--link'>
              <span className='link--cont'>
                <span className='link--text'>Пациентам</span>
                <span className='link--icon'>
                  <svg viewBox="0 0 24 24">
                    <title></title>
                    <path class="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fill-rule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </div>
          </li>
        </ul>
        
      </div>
        <div className='contacts'>
          <p>Контакты:</p>
        </div>
      </div>
      
    </nav>
  )
}

export default Nabvar