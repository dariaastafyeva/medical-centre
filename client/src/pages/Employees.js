import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from "axios"
import EmployeeCard from '../components/EmployeeCard';
import RouteHistory from '../components/RouteHistory';


const Employees = () => {

    const arrayOfRoutes = [
        {
            link: "/",
            name: "Главная",
        },
    ];

    const [employees, setEmployees] = useState([]);
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

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

    const isShowButton = true;

    const getMappedCard = (elements) => {
        return (
            <div className='team-cards'>
                {elements.map(element => (
                    <EmployeeCard
                        employee={element}
                        isShowButton={isShowButton}
                    />
                ))}
            </div>

        );
    };

    return (
        <div className='content--wrapper'>
            <RouteHistory
                arrayOfObjects={arrayOfRoutes}
            />
            <div className='employees'>
                <div className='team-group'>
                    <h1>
                        Наши специалисты
                    </h1>
                    <h4>Лучшие специалисты города Ярославль</h4>
                    {getMappedCard(employees, isShowButton)}
                </div>
            </div>
        </div>
    )
}

export default Employees