import React from 'react'

import { employees, feedback } from '../testingData/testingData';

const Feedback = () => {

    const getSpecialistsDropdown = (array) => {
        return (
            <select name="doctors-filter">
                {array.map(element => {
                    return (
                        <option value={element.id}>{element.name}</option>
                    );
                })}
            </select>
        );
    }

    const getFeedbackByFilter = (array) => {
        return (
            <div className='feedback-items'>
                {array.map(element => {
                    return (
                        <div className='feedback-item'>
                            <a href='#'>
                                <img src={element.img} alt="фото доктора"></img>
                                <p>{element.name}</p>
                            </a>
                            <div className='feedback-item--text-container'>
                                {/* <p>{element.feedback}</p> */}
                                <p>отзыв тест текст </p>
                                <div className='feedback-author'>
                                    {/* <p>{element.author}</p> */}
                                    <p>отзыв тест Имя</p>
                                    {/* <p>{element.date}</p> */}
                                    <p>отзыв тест дата</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }

    return (
        <div className='feedback'>
            <h1>Отзывы</h1>
            <div className='feedback-banner'>
                <h2>Служба заботы о пациентах</h2>
                <section className='feedback-banner--items'>
                    <p>
                        Собираем обратную связь от пациентов
                    </p>
                    <p>
                        Ежедневно улучшаем предоставляемые услуги
                    </p>
                    <p>
                        Индивидуально разбираем каждое обращение
                    </p>
                </section>

                <form>
                    <p>Специалист</p>
                    {getSpecialistsDropdown(employees)}
                </form>
                {getFeedbackByFilter(feedback)}
            </div>
        </div>
    )
}

export default Feedback