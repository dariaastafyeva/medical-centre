import React from 'react'
import FeedbackBody from './FeedbackBody'
import { Link } from 'react-router-dom'

const FeedbackCard = ({ element }) => {
    return (
        <div className='feedback-item'>
            {console.log(element)}
            <Link to={`/employees/${element.fb_employeeId}`} className='item-photo'>
                <img src={element.img} alt="фото доктора"></img>
                <p>{element.name}</p>
            </Link>
            <FeedbackBody
                element={element}
            />
        </div>
    )
}

export default FeedbackCard