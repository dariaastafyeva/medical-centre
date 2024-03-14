import React from 'react'

import Comma from '../components/Comma';

const FeedbackBody = ({ element }) => {
    return (
        <div className='feedback-item--text-container'>
            <div className='feedback-item--text-container-inner'>
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
    )
}

export default FeedbackBody