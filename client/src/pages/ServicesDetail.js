import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { getFirstLetterUpperCase } from '../utils/Utils';
import RouteHistory from '../components/RouteHistory';

const ServicesDetail = () => {

    const location = useLocation();
    const subServiceId = location.pathname.split('/')[2];
    const [services, setServices] = useState([]);

    const arrayOfRoutes = [
        {
            link: "/",
            name: "Главная",
        },
        {
            link: "/services",
            name: "Услуги",
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/services/detail/${subServiceId}`);
                setServices(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const getEmployeesByServiceName = (serviceName, services) => {
        return services.filter(service => service.serviceName === serviceName)
            .map(service => (
                {
                    employeeName: service.employeeName,
                    employeeId: service.sr_employeeId,
                }
            ))
    }

    const getNewDataFormat = (services) => {
        const newArrayOfData = [];
        const serviceNamesArray = [];

        services.forEach(service => {
            if (!serviceNamesArray.includes(service.serviceName)) {
                serviceNamesArray.push(service.serviceName);
                const newDataObject = {
                    id: service.id,
                    duration: service.duration,
                    imgName: service.imgName,
                    price: service.price,
                    serviceName: service.serviceName,
                    subGroupName: service.subGroupName,
                    employees: getEmployeesByServiceName(service.serviceName, services),
                }
                newArrayOfData.push(newDataObject);
            }
        });

        return newArrayOfData;
    }

    const getEmployeesElement = (employeesArray) => {
        return (
            <>
                {
                    employeesArray.map((employee, index) => (
                        <Link to={`/employees/${employee.employeeId}`} key={index}>
                        <p>
                        {employee.employeeName}
                        </p>
                        </Link>
                        
                    )
                    )
                }
            </>
        )
    }

    const createServicesTable = (servicesArray) => {

        const newDataFormat = getNewDataFormat(services);
        return (
            <div className='service-price-container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Услуга</th>
                            <th>Длительность, мин.</th>
                            <th>Цена</th>
                            <th>Специалисты:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newDataFormat.map((element, index) => (
                            <tr key={index}>
                                <td>{getFirstLetterUpperCase(element.serviceName)}</td>
                                <td>{element?.duration}</td>
                                <td>{element?.price}, руб.</td>
                                <td>{getEmployeesElement(element.employees)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )

    };

    return (
        <div className='content--wrapper'>
            <RouteHistory
                arrayOfObjects={arrayOfRoutes}
            />
            <div className='services-detail'>
                <h1>{services[0]?.subGroupName}</h1>
                <p>Все услуги категории "{services[0]?.subGroupName}":</p>
                <div className='service-price-container'>
                    {createServicesTable(services)}
                </div>
                <p>*Фактическая цена услуги может варьироваться в зависимости от конкретных медицинских показаний и потребностей пациента</p>
            </div>
        </div>
    )
}

export default ServicesDetail