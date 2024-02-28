import React from 'react'

import { employees } from '../../testingData/testingData'
import EmployeeCard from '../EmployeeCard'


const TeamGroup = () => {

    const isShowButton = false;
    const getMappedCard = (elements) => {
        return (
            <div className='team-cards'>
                {elements.map((element, index) => (
                    index < 4 && <EmployeeCard employee={element} />
                ))}
            </div>

        );
    };

    return (
        <div className='team-group'>
            <h1>
                Наша команда
            </h1>
            <h3>Познакомьтесь с нашей командой специалистов</h3>
            {getMappedCard(employees, isShowButton)}
            <button type='button' className='button-About' id='all-team'>Все специалисты</button>
            <h2>Мы принимаем на работу!</h2>
            <p>Если вы хотите присоединиться к нашей комнате, свяжитесь с нами:</p>
            <button className='button-About'>Связаться</button>
        </div>
    )
}

export default TeamGroup