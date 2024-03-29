import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import { employees, feedback } from '../testingData/testingData';
import FeedbackBody from '../components/FeedbackBody';
import Slider from '../components/slider/Slider';
import { getFirstLetterUpperCase } from '../utils/Utils';

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
    const [schedule, setSchedule] = useState([]);

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
        const fetchSchedule = async () => {
            try {
                const res = await axios.get(`/schedule/${employeeId}`);
                setSchedule(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        const fetchData = async () => {
            fetchEmployee();
            fetchExperience();
            fetchServices();
            fetchSchedule();
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
                    < li key={index} className="list-element">
                        {element}
                    </li>
                ))}
            </ul>
        );
    };

    const createServicesTable = (array) => {
        return (
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
                                <td>{getFirstLetterUpperCase(element.name)}</td>
                                <td>{element.duration}</td>
                                <td>{element.price}, руб.</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    const getNewNameFormat = () => {
        const nameArray = employee.name?.split(' ');
        return (
            <>
                {nameArray && <h1>{nameArray[0]}
                    <br></br>
                    {`${nameArray[1]} ${nameArray[2]}`}
                </h1>}
            </>
        )
    }

    const getScheduleTable = (array) => {
        return (
            <div className='schedule-container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>День недели</th>
                            <th>Время работы</th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((element, index) => (
                            <tr key={index}>
                                <td>{getFirstLetterUpperCase(element.dayOfWeek)}</td>
                                <td>{element.from && element.from} - {element.to && element.to}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    const getYearsSpelling = (years) =>{
        if (years !== 11 && years % 10 === 1){
            return "год"
        }
        if (years !== 11 && years % 10 < 5){
            return "года"
        }
        return "лет"
    }

    return (
        <div className='content--wrapper'>
            <div className='profile'>
                <div className='employee-banner'>
                    <div className='employee-content'>
                        {getNewNameFormat()}
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
                                    {`${employee.workExperience} ${getYearsSpelling(employee.workExperience)}`}
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
                            <li className='employee-specification'>
                                <span className='employee-specification--name'>
                                    Ведёт приём:
                                </span>
                                <span className='employee-specification--value'>
                                    {employee.patientType}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <img className='doctor-photo' alt="Фото доктора" src={employee.img}></img>
                </div>
                <ul className='page-sections--items'>
                    <li className='page-section--item'>
                        <a className='page-section--link' href="#education">Образование и опыт работы</a>
                    </li>
                    <li className='page-section--item'>
                        <a className='page-section--link' href="#cure">Лечение</a>
                    </li>
                    <li className='page-section--item'>
                        <a className='page-section--link' href="#price">Цены</a>
                    </li>
                    <li className='page-section--item'>
                        <a className='page-section--link' href="#feedback">Отзывы</a>
                    </li>
                    <li className='page-section--item'>
                        <a className='page-section--link' href="#schedule">Расписание</a>
                    </li>
                </ul>

                <div className='employee-detail'>
                    <section className='employee-detail-section' id="education">
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
                    <section className='employee-detail-section' id="cure">
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
                    <section className='employee-detail-section' id="price">
                        <h2>Цены*</h2>
                        <div className='service-price-container'>
                            {createServicesTable(services)}
                        </div>
                        <p>*Фактическая цена услуги может варьироваться в зависимости от конкретных медицинских показаний и потребностей пациента</p>
                    </section>
                    <section className='employee-detail-section' id="feedback">
                        <h2>Отзывы</h2>
                        <div className="slider">
                            <Slider
                                dataSource={employeeId}
                            />
                        </div>
                    </section>
                    <section className='employee-detail-section' id="schedule">
                        <h2>Расписание</h2>
                        {getScheduleTable(schedule)}
                    </section>
                </div>
            </div>
        </div>

    )
}

export default EmployeeProfile