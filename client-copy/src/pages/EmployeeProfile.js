import React from 'react'
import { useLocation } from 'react-router-dom'
import { employees } from '../testingData/testingData';

const EmployeeProfile = () => {

    const location = useLocation();
    const employeeId = location.pathname.split('/')[2];
    const employee = employees[employeeId];


    return (
        <div className='profile'>
            <div className='employee-banner'>
                <div className='employee-content'>
                    <h1>{employee.name}</h1>
                    <br></br>
                    <ul className='employee-specifications'>
                        <li className='employee-specification'>
                            <span className='employee-specification--name'>
                                Врач:
                            </span>
                            <span className='employee-specification--value'>
                                {employee.specialization}
                            </span>
                        </li>
                        <li className='employee-specification'>
                            <span className='employee-specification--name'>
                                Стаж:
                            </span>
                            <span className='employee-specification--value'>
                                {employee.experience}
                            </span>
                        </li>
                        <li className='employee-specification'>
                            <span className='employee-specification--name'>
                                Категория:
                            </span>
                            <span className='employee-specification--value'>
                                {employee.category}
                            </span>
                        </li>
                    </ul>
                    <p>{employee.desc}</p>
                </div>
                <img alt="Фото доктора" src={employee.img}></img>
            </div>
            <ul className='page-sections--items'>
                <li className='page-section--item'>
                    <a className='page-section--link' href="#">Образование и опыт работы</a>
                </li>
                <li className='page-section--item'>
                    <a className='page-section--link' href="#">Лечение</a>
                </li>
                <li className='page-section--item'>
                    <a className='page-section--link' href="#">Цены</a>
                </li>
                <li className='page-section--item'>
                    <a className='page-section--link' href="#">Отзывы</a>
                </li>
                <li className='page-section--item'>
                    <a className='page-section--link' href="#">Расписание</a>
                </li>
            </ul>

            <div className='employee-detail'>
                <section className='employee-detail-section'>
                    <h2>Образование и опыт работы</h2>
                    <div className='employee-detail--container'>
                        <h3>1998 - 2005</h3>
                        <p>ЯГМУ</p>
                    </div>
                    <div className='employee-detail--container'>
                        <h3>2006 - 20024</h3>
                        <p>Академия им. Пастухова</p>
                    </div>
                </section>
                <section className='employee-detail-section'>
                    <h2>Лечение и диагностика заболеваний:</h2>
                </section>
                <section className='employee-detail-section'>
                    <h2>Умения и навыки:</h2>
                </section>
                <section className='employee-detail-section'>
                    <h2>Цены*</h2>
                </section>
                <section className='employee-detail-section'>
                    <h2>Отзывы</h2>
                </section>
                <section className='employee-detail-section'>
                    <h2>Расписание</h2>
                </section>
            </div>
        </div>
    )
}

export default EmployeeProfile