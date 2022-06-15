import React, { useState } from 'react'

const ImputSearch = ({setSearchLocation}) => {

    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }

    return (
        <section className="header">
            <form onSubmit={searchLocation}>
            <input type="text" />
            <button>Search</button>
        </form>
        </section>
    )
}

export default ImputSearch
