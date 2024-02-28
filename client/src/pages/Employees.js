import React from 'react'
import EmployeeCard from '../components/EmployeeCard';
import { employees } from '../testingData/testingData';


const Employees = () => {

    const isShowButton = true;

    const getMappedCard = (elements) => {
        return (
            <div className='team-cards'>
                {elements.map(element => (
                    <EmployeeCard 
                    employee={element}
                    isShowButton = {isShowButton} 
                    />
                ))}
            </div>

        );
    };

    return (
        <div className='content--wrapper'>
            <div className='team-group'>
                <h1>
                    Наши специалисты
                </h1>
                <h3>Лучшие специалисты города Ярославль</h3>
                {getMappedCard(employees, isShowButton)}                
            </div>
        </div>
    )
}

export default Employees