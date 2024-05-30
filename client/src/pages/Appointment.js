import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { getFirstLetterUpperCase } from '../utils/Utils';
import Select from '../components/Select.js'
import { Link } from 'react-router-dom';
import RouteHistory from '../components/RouteHistory';
import { getGroups, getGroupNameById, getSubGroupsByGroupId, getGroupIdAndNameArray, getSubGroupsArray } from '../utils/ServiceUtils';

const Appointment = () => {

    const [services, setServices] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState();
    const [selectedSubGroup, setSelectedSubGroup] = useState();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(`/services/detail/${subServiceId}`);
    //             setServices(res.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // }, []);

    const handleCheckBoxClick = () => {

    }

    const getDropdownListOfServices = () => {
        const groupArray = getGroups(services);

        return (
            <div className='dropdown-services-container'>
                {/* <label htmlFor="touch"><h3>Выберите услугу</h3></label>
                <input type="checkbox" id="touch" value="" />
                <ul className="slide">
                    {groupArray.map((groupId, index) => (
                        <li key={index}>
                            <a href='#'>
                                <p onClick={handleCheckBoxClick}>
                                    {getGroupNameById(groupId, services)}
                                </p>
                            </a>
                        </li>
                    ))}
                </ul> */}

                {/* <select className="slide">
                    <option id="select-header" value="-1" disabled selected hidden><h3>Выберите услугу</h3></option>
                    {groupArray.map((groupId, index) => (
                        <option key={index}>
                            {getGroupNameById(groupId, services)}
                        </option>
                    ))}
            </select> */}
                <label class="select" for="slct">
                    <select id="slct" required="required">
                        <option value="" disabled="disabled" selected="selected">ВЫБЕРИТЕ УСЛУГУ</option>
                        {groupArray.map((groupId, index) => (
                            <option key={index} value={groupId}>
                                {getGroupNameById(groupId, services)}
                            </option>
                        ))}
                    </select>
                    <svg>
                        <use href="#select-arrow-down"></use>
                    </svg>
                </label>
                
                <svg class="sprites">
                    <symbol id="select-arrow-down" viewbox="0 0 10 6">
                        <polyline points="1 1 5 5 9 1"></polyline>
                    </symbol>
                </svg>
            </div >
        );
    }

return (
    <div className='content--wrapper'>
        <div className='appointment'>
            <h1>Запись</h1>
            <div className='appointment-container'>
                <div className='appointment-service'>
                    {/* {getDropdownListOfServices()} */}
                    <Select
                        defaultText="ВЫБЕРИТЕ НАПРАВЛЕНИЕ"
                        optionsList={getGroupIdAndNameArray(services)}
                        setSelected={setSelectedGroup}
                    />
                    <Select
                        defaultText="ВЫБЕРИТЕ ТИП УСЛУГИ"
                        optionsList={getSubGroupsArray(getSubGroupsByGroupId(selectedGroup, services))}
                        setSelected={setSelectedSubGroup}
                    />
                    {/* <Select
                        defaultText="ВЫБЕРИТЕ УСЛУГУ"
                        optionsList={getGroupIdAndNameArray(services)}
                    /> */}
                </div>
                <div>
                    <h4>ИЛИ</h4>
                </div>
                <div className='appointment-employee'>
                    <h3>Выберите специалиста</h3>
                </div>
            </div>
        </div>

    </div>
)
}

export default Appointment