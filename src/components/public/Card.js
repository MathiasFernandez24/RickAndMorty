import './Card.css'
import React from 'react'
import { Link } from 'react-router-dom';



export const Card = (props) => {
    const { personaje } = props

    return (
        <Link name="pepitoHonguito" to={`/detail/${personaje.id}`} type="button" class="btn btn-sm ">
            <div class="card animate__animated animate__pulse animate__faster" >
                <div className='overflow'>
                    <img src={personaje.image} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <h2 class="card-text">{personaje.name}</h2>
                </div>
            </div>
        </Link >
    )
}
