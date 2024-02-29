import React from 'react'

const Services = () => {
    return (
        <div className='servisces'>
            <h1>Услуги</h1>
            <div className='sections-container'>
                <section className='sections-container--column'>
                    <h2>Лечебная косметология</h2>
                    <p>Услуга 1</p>
                    <p>Услуга 2</p>
                </section>
                <section className='sections-container--column'>
                    <h2>Мануальная и физиотерапия</h2>
                    <p>Мануальная терапия</p>
                    <p>Массаж</p>
                    <p>Рефлексотерапия</p>
                    <p>Физиотерапия</p>
                    <p>Войта-терапия</p>
                    <p>Боббат-терапия</p>
                </section>
            </div>
            <div className='extra-servises'>
                <section className='sections-container--column'>
                    <h2>Лечебнно-профилактические мероприятия для лечения:</h2>
                    <p>Заболеваний опорно-двигательного аппарата (например, остеохондроз)</p>
                    <p>Заболеваний сердечно-сосудистой системы (включая гипертоническую болезнь и ишемическую болезнь сердца)</p>
                    <p>Варикозная болезнь ног (ХВН)</p>
                </section>
            </div>
        </div>
    )
}

export default Services