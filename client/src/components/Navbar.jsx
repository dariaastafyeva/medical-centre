import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from './Logo.js'


const Nabvar = () => {
  return (
    <nav>
      <div className='navbar-container' id="navbar">
        <div className='navbar-container-left-side'>
          <div className='logo'>
            <Link to="/" >
              <Logo />
            </Link>
          </div>
          <div className='name-container'>
            <h1 className='name'>МЕДИЦИНСКИЙ ЦЕНТР</h1>
            <p>ПРИ ГОСУДАРСТВЕННОЙ АКАДЕМИИ ПРОМЫШЛЕННОГО МЕНЕДЖМЕНТА<br></br> ИМЕНИ Н.П. ПАСТУХОВА</p>
          </div>
          <div className='head-nav'>
            <ul className='head-nav--list'>
              <Link to="/about">
                <li className='head-nav--item'>
                  <div className='link head-nav--link'>
                    <span className='link--cont'>
                      <span className='link--text'>О&nbsp;компании</span>
                      <span className='link--icon'>
                        <svg width='20px' viewBox="0 0 24 24">
                          <title></title>
                          <path className="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fillRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to="/employees">
                <li className='head-nav--item'>
                  <div className='link head-nav--link'>
                    <span className='link--cont'>
                      <span className='link--text'>Врачи</span>
                      <span className='link--icon'>
                        <svg viewBox="0 0 24 24">
                          <title></title>
                          <path className="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fillRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to="/services">
                <li className='head-nav--item'>
                  <div className='link head-nav--link'>
                    <span className='link--cont'>
                      <span className='link--text'>Услуги</span>
                      <span className='link--icon'>
                        <svg viewBox="0 0 24 24">
                          <title></title>
                          <path className="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fillRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </li>
              </Link>
              <Link to="/feedback">
                <li className='head-nav--item'>
                  <div className='link head-nav--link'>
                    <span className='link--cont'>
                      <span className='link--text'>Отзывы</span>
                      <span className='link--icon'>
                        <svg viewBox="0 0 24 24">
                          <title></title>
                          <path className="i-icon _fill" d="M7 10l5 5 5-5z" fill="#2C3E50" fillRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className='contacts'>
          <p>Контакты:</p>
          <div className='phone-email'>
            <span>
              +7 (666) 555-44-33
            </span>
            <span>
              contact@email.com
            </span>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Nabvar