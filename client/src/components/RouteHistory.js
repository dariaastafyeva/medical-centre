import React from 'react'
import { Link } from 'react-router-dom'

const RouteHistory = (arrayOfObjects) => {

    console.log(arrayOfObjects)
    const getRouteWhithLinks = () => {
        return (
            <p>
                {arrayOfObjects.length && arrayOfObjects.map((object, index) => (
                    <Link to={object.route}>
                        {index === 0 ? object.text : `/ ${object.text}`}
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