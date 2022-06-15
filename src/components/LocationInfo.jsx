import React from 'react'

const LocationInfo = ({location}) => {

    return (
        <article className='locationInfo'>
            <ul className='locationList'>
                <li><span>Name: </span><br />{location?.name}</li>
                <li><span>Type: </span><br />{location?.type}</li>
                <li><span>Dimension: </span><br />{location?.dimension}</li>
                <li><span>Population: </span><br />{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo