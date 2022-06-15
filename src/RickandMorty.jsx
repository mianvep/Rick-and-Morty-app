import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardCharacter from './components/CardCharacter'
import ImputSearch from './components/ImputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi'
import './App.css'

const RickandMorty = () => {

    const [searchLocation, setSearchLocation] = useState()

    const location = useLocationApi(searchLocation)

    return (
    <div className='rickandmorty'>
        <ImputSearch setSearchLocation={setSearchLocation} />
        <LocationInfo location={location} />
        <div className='cards'>
            {location?.residents.map(resident => (
                <CardCharacter 
                    resident={resident}
                    key = {resident}
                />

            ))}
        </div>
    </div>
    )
}

export default RickandMorty
