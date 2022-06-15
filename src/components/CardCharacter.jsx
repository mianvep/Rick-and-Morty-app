import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({resident}) => {

    const character = useCharacterApi(resident)

    return (
        <article className='cardsInfo'>
            <img src={character?.image} alt="" />
            <h2>{character?.name}</h2>
            <p><span>Status:</span> {character?.status}</p>
            <p><span>Oringin:</span> {character?.origin.name}</p>
            <p><span>Episodes where appear:</span> {character?.episode.length}</p>
        </article>
    )
}

export default CardCharacter