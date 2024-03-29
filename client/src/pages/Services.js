import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getFirstLetterUpperCase } from '../utils/Utils';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/services");
                setServices(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const getNewDataFormat = (data) => {
        let resultArray = [];
        let groupObject = {};
        let subServicesarray = [];
        let subServiceObject = {};

        /** 0: 
groupName: "ЛЕЧЕБНАЯ КОСМЕТОЛОГИЯ"
id: 1
imgName: "cosmetology-injections"
serviceId: 7
subGroupName: "инъекционные процедуры"      */
        data.forEach(element => {
            // resunl
        })

    }

    const getGroups = (data) => {
        let groupArray = []
        data.forEach(element => {
            if (!groupArray.includes(element.groupId)) {
                groupArray.push(element.groupId)
            }
        })
        return groupArray;
    }

    const getGroupNameById = (id) => {
        return services.find(service => service.groupId === id).groupName;
    }

    const getSubGroupsByGroupId = (id) => {
        return services.filter(service => service.groupId === id)

    }


    const getListOfSubGroupsElement = (id) => {
        const subGroupArray = getSubGroupsByGroupId(id);
        return (
            <>
                {subGroupArray.length > 4 ? (
                    <div className='sections-container--column-block'>
                        <div className='service-container'>
                            {
                                subGroupArray.map((subGroup, index) => (
                                    index < 4 && <div className='service-container--element' key={index}>
                                        <img src={`/servicesItems/${subGroup.imgName}.png`} alt='иконка к услуге'></img>
                                        <p>{getFirstLetterUpperCase(subGroup.subGroupName)}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='service-container'>
                            {
                                subGroupArray.map((subGroup, index) => (
                                    index >= 4 && <div className='service-container--element' key={index}>
                                        <img src={`/servicesItems/${subGroup.imgName}.png`} alt='иконка к услуге'></img>
                                        <p>{getFirstLetterUpperCase(subGroup.subGroupName)}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className='sections-container--column-block'>
                        <div className='service-container'>
                            {
                                subGroupArray.map((subGroup, index) => (
                                    <div className='service-container--element' key={index}>
                                        <img src={`/servicesItems/${subGroup.imgName}.png`} alt='иконка к услуге'></img>
                                        <p>{getFirstLetterUpperCase(subGroup.subGroupName)}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}
            </>
        )
    }

    const getAdultSection = () => {
        return;
    }

    const getBabySection = () => {

    }
    const getListOfServicesElement = (services) => {
        const groupArray = getGroups(services);
        return (
            <div className='sections-container'>
                {
                    groupArray.map((groupId, index) => (

                        <section className='sections-container--column' key={index}>
                            <div className='services-names-section'>
                                <h3>{getGroupNameById(groupId)}</h3>
                            </div>
                            {getListOfSubGroupsElement(groupId)}
                        </section>
                    ))
                }
            </div>

        )
    }

    return (
        <div className='content--wrapper'>
            <div className='services'>
                <h1>Услуги</h1>
                {getListOfServicesElement(services)}
                {/* <div className='sections-container'>
                    <section className='sections-container--column'>
                        <div className='services-names-section'>
                            <h3>Мануальная и физиотерапия</h3>
                        </div>
                        <div className='sections-container--column-block'>
                            <div className='adult-section'>
                                <div className='service-container'>
                                    <img src='/servicesItems/manual-manual.png'></img>
                                    <p>Мануальная терапия</p>
                                </div>
                                <div className='service-container'>
                                    <img src='/servicesItems/manual-massage.png'></img>
                                    <p>Массаж</p>
                                </div>
                                <div className='service-container'>
                                    <img src='/servicesItems/manual-reflexology.png'></img>
                                    <p>Рефлексотерапия</p>
                                </div>
                                <div className='service-container'>
                                    <img src='/servicesItems/manual-physio.png'></img>
                                    <p>Физиотерапия</p>
                                </div>
                            </div>

                            <div className='baby-section'>
                                <div className='service-container'>
                                    <img src='/servicesItems/manual-voyto.png'></img>
                                    <p>Войта-терапия</p>
                                </div>
                                <div className='service-container'>
                                    <img src='/servicesItems/manual-bobbat.png'></img>
                                    <p>Боббат-терапия</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='sections-container--column' id='extra-services'>
                        <div className='services-names-section'>
                            <h3>Лечебнно-профилактические<br></br> мероприятия для лечения:</h3>
                        </div>
                        <div className='service-container'>
                            <img src='/servicesItems/prevention-osteochondrosis.png'></img>
                            <p>Заболеваний<br></br>
                                опорно-двигательного аппарата<br></br>
                                (например, остеохондроз)
                            </p>
                        </div>
                        <div className='service-container'>
                            <img src='/servicesItems/prevention-heart.png'></img>
                            <p>Заболеваний<br></br>
                                сердечно-сосудистой системы<br></br>
                                (включая гипертоническую болезнь<br></br>
                                и ишемическую болезнь сердца)
                            </p>
                        </div>
                        <div className='service-container'>
                            <img src='/servicesItems/prevention-varicose.png'></img>
                            <p>Варикозная болезнь ног (ХВН)</p>
                        </div>
                    </section>
                </div> */}
            </div>
        </div>

    )
}

export default Services