import React from 'react'

import { employees, feedback } from '../testingData/testingData';
import Comma from '../components/Comma';

const Feedback = () => {

    const getSpecialistsDropdown = (array) => {
        return (
            <div className='select-wrapper'>
                <select className="doctors-filter">
                    {array.map(element => {
                      
                        return (
                            <option value={element.id}>{element.name}</option>
                        );
                    })}
                </select>
                <svg viewBox="0 0 24 24" className="sprites">
                    <path class="i-icon _fill" d="M7 10l5 5 5-5z" fill-rule="evenodd"></path>
                </svg>

            </div>

        );
    }

    const getFeedbackByFilter = (array) => {
        return (
            <div className='feedback-items'>
                {array.map(element => {
                    return (
                        <div className='feedback-item'>
                            <a href='#' className='item-photo'>
                                <img src={element.img} alt="фото доктора"></img>
                                <p>{element.name}</p>
                            </a>
                            <div className='feedback-item--text-container'>
                                <Comma />
                                <div className='feedback-text--container'>
                                    {/* <p>{element.feedback}</p> */}
                                    <p>отзыв тест текст </p>
                                </div>

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
            <div className='feedback-banner'>
                <h2>Служба заботы о пациентах</h2>
                <section className='feedback-banner--items'>
                    <div className='feedback-banner--item'>
                        <div className='feedback-banner--item-container'>
                            <img className='feedback-icon' src='feedbackItems/feedback.png'></img>
                            <p>
                                Собираем обратную связь от пациентов
                            </p>
                        </div>

                    </div>
                    <div className='feedback-banner--item'>
                        <div className='feedback-banner--item-container'>
                            <img className='feedback-icon' src='feedbackItems/hands.png'></img>

                            <p>
                                Ежедневно улучшаем предоставляемые услуги
                            </p>
                        </div>
                    </div>
                    <div className='feedback-banner--item'>
                        <div className='feedback-banner--item-container'>
                            <img className='feedback-icon' src='feedbackItems/feedback.png'></img>
                            <p>
                                Индивидуально разбираем каждое обращение
                            </p>
                        </div>
                    </div>
                </section>


            </div>
            <form className='specialist-filter'>
                <div className='filter-container'>
                    <p className='specialist-name'>Специалист</p>
                    {getSpecialistsDropdown(employees)}
                </div>

                <a href='#' className='leave-feedback-link'>Оставить отзыв</a>
            </form>
            {getFeedbackByFilter(feedback)}
        </div>
    )
}

export default Feedback