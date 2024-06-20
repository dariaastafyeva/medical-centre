import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/authContext'

import { Logo } from './Logo.js'


const Nabvar = () => {
  const [error, setError] = useState(null);
  const {currentUser, userIcon, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const loginImgRef = useRef(null);
  const userMenuRef = useRef(null);

  const handleLogout = async (e)=>{
    try {
      await logout();
      loginImgRef.current.src = userIcon.current
      userMenuRef.current.style.display = "none";
      navigate("/");
    } catch (err) {
      setError(error.response.data)
    }
  }

  const handleMouseOver = (e) => {
    if(currentUser){
      userMenuRef.current.style.display = "block";
    }
  }
  const handleMouseOut = (e) => {
    if (currentUser) {
      userMenuRef.current.style.display = "none";
    }
  }


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
              <Link to="/appointment">
                <li className='head-nav--item'>
                  <div className='link head-nav--link'>
                    <span className='link--cont'>
                      <span className='link--text'>Запись</span>
                      <span className='link--icon'>
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
        <div className='login-icon-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <Link to="/login" className='login-link'>
            <img src={userIcon.current} alt='login' ref={loginImgRef}></img>
          </Link>
          {error && <p>{error}</p>}
          <div className='logout-btn--container' ref={userMenuRef}>
            <button>Управление профилем</button>
            <button onClick={handleLogout}>Выйти</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nabvar