import React, { useEffect, useState } from 'react'

// import { employees, feedback } from '../testingData/testingData';
import FeedbackCard from '../components/FeedbackCard';
import axios from 'axios';

const Feedback = () => {

    const [selectedItem, setSelectedItem] = useState(0);
    const [feedbacks, setFeedbacks] = useState([]);
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

    useEffect(() => {
        const fetchAllFeedback = async () => {
            try {
                let route = `/feedbacks`;
                if (selectedItem !== 0) {
                    route = `/feedbacks/${selectedItem}`;
                }

                const res = await axios.get(route);
                setFeedbacks(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        const fetchData = async () => {
            fetchAllFeedback();
        }

        fetchData();
    }, [selectedItem])

    const handleChange = (e) => {
        const selectedEmployeeId = e.target.value;
        setSelectedItem(parseInt(selectedEmployeeId));
        getFeedbackByFilter(feedbacks);

    }

    const getSpecialistsDropdown = (array) => {
        return (
            <div className='select-wrapper'>
                <select className="doctors-filter" onChange={handleChange}>
                    {array.map((element, index) => {
                        if (index === 0) {
                            return (
                                <option value="0" key={index}>Все</option>
                            )
                        } else {
                            return (
                                <option value={element.id} key={index}>{element.name}</option>
                            );
                        }

                    })}
                </select>
                <svg viewBox="0 0 24 24" className="sprites">
                    <path className="i-icon _fill" d="M7 10l5 5 5-5z" fillRule="evenodd"></path>
                </svg>

            </div>

        );
    }

    const getFeedbackByFilter = (array) => {
        return (
            <div className='feedback-items'>
                {array.map((element, index) => {
                    return (
                        <FeedbackCard
                            element={element}
                            key={index}
                        />
                    );
                })}
            </div>
        )
    }

    return (
        <div className='content--wrapper '>
            <div className='feedback'>
                <div className='feedback-banner'>
                    <h2>Служба заботы о пациентах</h2>
                    <section className='feedback-banner--items'>
                        <div className='feedback-banner--item'>
                            <div className='feedback-banner--item-container'>
                                <img className='feedback-icon' src='feedbackItems/feedback.png'></img>
                                <p>
                                    Собираем обратную связь от пациентов
                                </p>
                            </div>

                        </div>
                        <div className='feedback-banner--item'>
                            <div className='feedback-banner--item-container'>
                                <img className='feedback-icon' src='feedbackItems/hands.png'></img>

                                <p>
                                    Ежедневно улучшаем предоставляемые услуги
                                </p>
                            </div>
                        </div>
                        <div className='feedback-banner--item'>
                            <div className='feedback-banner--item-container'>
                                <img className='feedback-icon' src='feedbackItems/feedback.png'></img>
                                <p>
                                    Индивидуально разбираем каждое обращение
                                </p>
                            </div>
                        </div>
                    </section>


                </div>
                <form className='specialist-filter'>
                    <div className='filter-container'>
                        <p className='specialist-name'>Специалист</p>
                        {getSpecialistsDropdown(employees)}
                    </div>

                    <a href='#' className='leave-feedback-link'>Оставить отзыв</a>
                </form>
                {getFeedbackByFilter(feedbacks)}
            </div>
        </div>

    )
}

export default Feedback

