import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import { employees, feedback } from '../testingData/testingData';
import FeedbackBody from '../components/FeedbackBody';
import Slider from '../components/slider/Slider';

const EDUCATION = "education";
const EXPERIENCE = "experience";

const EmployeeProfile = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const employeeId = location.pathname.split('/')[2];

    const [employee, setEmployee] = useState({});
    const [experiences, setExperiences] = useState({});

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await axios.get(`/employees/${employeeId}`);
                setEmployee(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        const fetchExperience = async () => {
            try {
                const res = await axios.get(`/experiences/${employeeId}`);
                setExperiences(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        const fetchData = async () => {
            fetchEmployee();
            fetchExperience();
        }
        fetchData();
    }, [employeeId])

    console.log(employee)

    const getExperienceList = (object, type) => {
        // return (
        //     {for(const[key, value] of Object.entries(object)){

        //     }}

        //     array.map(element => {
        //         return (
        //             type === element.type && (<div className='employee-detail--container'>
        //                 <p className='text-year'>element.yearInterval</p>
        //                 <p className='text-info'>element.place</p>
        //             </div>)
        //         )
        //     })
        // );

    };

    // const getMappedFeedback = (array) => {
    //     return (
    //         array.map(element => {
    //             return (<li>
    //                 <FeedbackBody
    //                     element={element}
    //                 />
    //             </li>);
    //         })
    //     );
    // }

    return (
        <div className='content--wrapper'>
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
                        <p className='doctor-desc'>{employee.desc}</p>
                    </div>
                    <img className='doctor-photo' alt="Фото доктора" src={employee.img}></img>
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
                        <div className='employee-detail-section--block'>
                            <p>Образование:</p>
                            <div className='employee-detail-wrapper'>
                                {getExperienceList(experiences, EDUCATION)}
                            </div>
                        </div>
                        <div className='employee-detail-section--block'>
                            <p>Опыт работы:</p>
                            <div className='employee-detail-wrapper'>
                                <div className='employee-detail--container'>
                                    <p className='text-year'>2006 - 2010</p>
                                    <p className='text-info'>Государственный областной перинатальный центр</p>
                                </div>
                                <div className='employee-detail--container'>
                                    <p className='text-year'>2011 - 2024</p>
                                    <p className='text-info'>Академия им. Пастухова</p>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className='employee-detail-section'>
                        <h2>Лечение и диагностика заболеваний:</h2>
                        <div className='diagnostics-container'>
                            <p className='diagnoctic'>Описание заболеваний/эстетических услуг, на которых специализиуется доктор</p>
                        </div>
                    </section>
                    <section className='employee-detail-section'>
                        <h2>Умения и навыки:</h2>
                        <div className='skills-container'>
                            <p className='skill'>Умение/навык 1</p>
                            <p className='skill'>Умение/навык 1</p>
                            <p className='skill'>Умение/навык 1</p>
                            <p className='skill'>Умение/навык 1</p>
                            <p className='skill'>Умение/навык 1</p>
                            <p className='skill'>Умение/навык 1</p>
                        </div>
                    </section>
                    <section className='employee-detail-section'>
                        <h2>Цены*</h2>
                        <div className='service-price-container'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Услуга</th>
                                        <th>Цена</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Полное наименование Услуги 1</td>
                                        <td>Цена, руб</td>
                                    </tr>
                                    <tr>
                                        <td>Полное наименование Услуги 2</td>
                                        <td>Цена, руб</td>
                                    </tr>
                                    <tr>
                                        <td>Полное наименование Услуги 3</td>
                                        <td>Цена, руб</td>
                                    </tr>
                                    <tr>
                                        <td>Полное наименование Услуги 4</td>
                                        <td>Цена, руб</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>*Фактическая цена услуги может варьироваться в зависимости от конкретных медицинских показаний и потребностей пациента</p>
                    </section>
                    <section className='employee-detail-section'>
                        <h2>Отзывы</h2>
                        <div class="slider">
                            <Slider />
                        </div>
                    </section>
                    <section className='employee-detail-section'>
                        <h2>Расписание</h2>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default EmployeeProfile