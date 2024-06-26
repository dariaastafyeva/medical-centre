import React from 'react'
import { Link } from 'react-router-dom'

const Booking = () => {
    return (
        <div className='booking-section'>
            <h1>Возьмите под контроль свое здоровье</h1>
            <div className='contact-us-block'>
                <p>Наша команда экспертов готова помочь вам. Свяжитесь с нами сегодня!</p>
                <div className='button-group'>
                    <button type='button' className='button-Appointment'>Запись</button>
                    <Link to="/about">
                        <button type='button' className='button-About'>Подробнее...</button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Booking