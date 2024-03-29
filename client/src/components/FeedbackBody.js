import React from 'react'

import Comma from '../components/Comma';

const FeedbackBody = ({ element }) => {

    const sqlToJsDate = (sqlDate) => {
        const dateString = sqlDate.slice(0, 10);
        const dateArray = dateString.split('-')
        return new Date(dateArray[0], dateArray[1], dateArray[2]);
    }

    const formatDate = (dateFromSQL) => {
        const date = sqlToJsDate(dateFromSQL);
        const result = date.toLocaleDateString('ru-RU', {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })

        return result
    }

    return (
        <div className='feedback-item--text-container'>
            <div className='feedback-item--text-container-inner'>
                <div className='text-overlay'>
                    <Comma />
                    <div className='feedback-text--container'>
                        <p>{element.text}</p>
                    </div>
                </div>


                <div className='feedback-author'>
                    <p>{element.username}</p>
                    <p>{formatDate(element.date)}</p>
                </div>
            </div>

        </div>
    )
}

export default FeedbackBody