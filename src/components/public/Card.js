import './Card.css'
import React from 'react'
import { Link } from 'react-router-dom';



export const Card = (props) => {
    const { personaje } = props

    return (
        <div className='animate__animated animate__zoomInUp'>
            <Link name="pepitoHonguito" to={`/detail/${personaje.id}`} type="button" class="btn btn-sm ">
                <div class="col card">
                    <div className='overflow'>
                        <img src={personaje.image} className={"card-img-top"} />
                    </div>
                    <div class="card-body">
                        <h2 class="card-text">"{personaje.name}"</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}
