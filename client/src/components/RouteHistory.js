import React from 'react'
import { Link } from 'react-router-dom'

const RouteHistory = (props) => {

    const getRouteWhithLinks = () => {
        return (
            <p className='route-history'>
                {props.arrayOfObjects.map((object, index) => (
                    <Link to={object.link} key={index} className='link'>
                        {`< ${object.name} `}
                    </Link>
                ))}
            </p>
        )
    }

    return (
        <div>
            {getRouteWhithLinks()}
        </div>
    )
}

export default RouteHistory