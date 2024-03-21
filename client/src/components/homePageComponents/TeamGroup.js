import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

// import { employees } from '../../testingData/testingData'
import EmployeeCard from '../EmployeeCard'


const TeamGroup = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/employees");
                setEmployees(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

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
            <Link to="/employees">
                <button type='button' className='button-About' id='all-team'>Все специалисты</button>
            </Link>
            <h2>Мы принимаем на работу!</h2>
            <p>Если вы хотите присоединиться к нашей комнате, свяжитесь с нами:</p>
            <button className='button-About'>Связаться</button>
        </div>
    )
}

export default TeamGroup