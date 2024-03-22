import React from 'react'

import Comma from '../components/Comma';

const FeedbackBody = ({ element }) => {

    const sqlToJsDate = (sqlDate) => {
        const dateString = sqlDate.slice(0, 10);
        const dateArray = dateString.split('-')
        return new Date(dateArray[0], dateArray[1], dateArray[2]);
        //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
        // var sqlDateArr1 = sqlDate?.split("-");
        // console.log(sqlDateArr1);
        //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
        // var sYear = sqlDateArr1[0];
        // var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
        // var sqlDateArr2 = sqlDateArr1[2]?.split(" ");
        // //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
        // var sDay = sqlDateArr2[0];
        // var sqlDateArr3 = sqlDateArr2[1]?.split(":");
        // //format of sqlDateArr3[] = ['hh','mm','ss.ms']
        // var sHour = sqlDateArr3[0];
        // var sMinute = sqlDateArr3[1];
        // var sqlDateArr4 = sqlDateArr3[2]?.split(".");
        // //format of sqlDateArr4[] = ['ss','ms']
        // var sSecond = sqlDateArr4[0];
        // var sMillisecond = sqlDateArr4[1];

        // return new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond, sMillisecond);
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