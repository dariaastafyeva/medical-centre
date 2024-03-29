import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getFirstLetterUpperCase } from '../utils/Utils';
import { Link } from 'react-router-dom';

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
                                    index < 4 && 
                                    <Link to={`/services/${subGroup.id}`} key={index}>
                                        <div className='service-container--element' >
                                            <img src={`/servicesItems/${subGroup.imgName}.png`} alt='иконка к услуге'></img>
                                            <p>{getFirstLetterUpperCase(subGroup.subGroupName)}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className='service-container'>
                            {
                                subGroupArray.map((subGroup, index) => (
                                    index >= 4 && 
                                    <Link to={`/services/${subGroup.id}`} key={index}>
                                        <div className='service-container--element' >
                                            <img src={`/servicesItems/${subGroup.imgName}.png`} alt='иконка к услуге'></img>
                                            <p>{getFirstLetterUpperCase(subGroup.subGroupName)}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className='sections-container--column-block'>
                        <div className='service-container'>
                            {
                                subGroupArray.map((subGroup, index) => (
                                    <Link to={`/services/${subGroup.id}`} key={index}>
                                        <div className='service-container--element' >
                                            <img src={`/servicesItems/${subGroup.imgName}.png`} alt='иконка к услуге'></img>
                                            <p>{getFirstLetterUpperCase(subGroup.subGroupName)}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )}
            </>
        )
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
            </div>
        </div>

    )
}

export default Services