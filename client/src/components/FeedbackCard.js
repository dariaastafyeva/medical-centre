import React from 'react'
import FeedbackBody from './FeedbackBody'

const FeedbackCard = ({ element }) => {
    return (
        <div className='feedback-item'>
            <a href='#' className='item-photo'>
                <img src={element.img} alt="фото доктора"></img>
                <p>{element.name}</p>
            </a>
            <FeedbackBody
                element={element}
            />
        </div>
    )
}

export default FeedbackCard