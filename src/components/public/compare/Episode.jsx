import React, { useEffect, useState } from 'react'
import './Episode.css'

const Episode = ({ episodeUrl }) => {
    const [episode, setEpisode] = useState({})

    useEffect(() => {
        fetch(episodeUrl)
            .then(res => res.json())
            .then(r => {
                setEpisode(r)
            })
    }, [episodeUrl])




    return (
        <div className='episodeContainer'>
            <h7 >Episode #{episode.id} </h7>
            <h7 className='nameEpisode'>- {episode.name} - </h7>
            <h7 className='airDateEpisode'>{episode.air_date} </h7>
        </div >
    )
}

export default Episode