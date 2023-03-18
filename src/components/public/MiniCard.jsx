import React from 'react'
import { Link } from 'react-router-dom';
import './MiniCard.css'

const MiniCard = ({ personaje }) => {
    console.log("hace render");
    return (
        <Link to={`/detail/${personaje.id}`}>
            <div onClick={() => console.log(personaje.name)} className='MiniCard-container'>
                <img className='MiniCard-img' src={personaje.image} alt="Loading..." />
                <h1>
                    {personaje.id}
                </h1>
            </div>
        </Link>
    )
}

export default MiniCard