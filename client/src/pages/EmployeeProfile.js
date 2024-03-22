import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import { employees, feedback } from '../testingData/testingData';
import FeedbackBody from '../components/FeedbackBody';
import Slider from '../components/slider/Slider';

const EDUCATION = "education";
const EXPERIENCE = "experience";
const EMPLOYEE = "employee"
const DIAGNOSTIC = "diagnostic";
const SKILLS = "skills";

const EmployeeProfile = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const employeeId = location.pathname.split('/')[2];

    const [employee, setEmployee] = useState({});
    const [experiences, setExperiences] = useState([]);
    const [services, setServices] = useState([]);

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
        const fetchServices = async () => {
            try {
                const res = await axios.get(`/services/${employeeId}`);
                setServices(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        const fetchData = async () => {
            fetchEmployee();
            fetchExperience();
            fetchServices();
        }
        fetchData();
    }, [employeeId])

    const getExperienceList = (array, elementClassName, type) => {
        return (
            <>
                {array.map((object, index) => (
                    object.type === type && <div className={`${elementClassName}--container`} key={index}>
                        <p className='text-year'>{object.yearInterval}</p>
                        <p className='text-info'>{object.place}</p>
                    </div>
                ))}
            </>
        );
    };

    const getElementsList = (array, elementClassName) => {
        return (
            <ul className={elementClassName}>
                {array.map((element, index) => (
                    < li key={index} className={`${elementClassName}--element`}>
                        {element}
                    </li>
                ))}
            </ul>
        );
    };

    const createServicesTable = (array) => {
        return(
            <div className='service-price-container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Услуга</th>
                            <th>Длительность, мин.</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((element, index) => (
                            <tr key={index}>
                                <td>{element.name[0].toUpperCase() + element.name.slice(1)}</td>
                                <td>{element.duration}</td>
                                <td>{element.price}, руб.</td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }


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
                                    {employee.workExperience}
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
                                {getExperienceList(experiences, EMPLOYEE, EDUCATION)}
                            </div>
                        </div>
                        <div className='employee-detail-section--block'>
                            <p>Опыт работы:</p>
                            <div className='employee-detail-wrapper'>
                                {getExperienceList(experiences, EMPLOYEE, EXPERIENCE)}
                            </div>
                        </div>

                    </section>
                    <section className='employee-detail-section'>
                        <h2>Лечение и диагностика заболеваний:</h2>
                        <div className='diagnostics-container'>
                            {
                                employee.desc && getElementsList(employee.desc?.split(','), DIAGNOSTIC)
                            }
                        </div>
                    </section>
                    <section className='employee-detail-section'>
                        <h2>Умения и навыки:</h2>
                        <div className='skills-container'>
                            {employee.skills && getElementsList(employee.skills?.split(','), SKILLS)}
                        </div>
                    </section>
                    <section className='employee-detail-section'>
                        <h2>Цены*</h2>
                        <div className='service-price-container'>
                            {createServicesTable(services)}
                        </div>
                        <p>*Фактическая цена услуги может варьироваться в зависимости от конкретных медицинских показаний и потребностей пациента</p>
                    </section>
                    <section className='employee-detail-section'>
                        <h2>Отзывы</h2>
                        <div className="slider">
                            <Slider
                                dataSource={employeeId}
                            />
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