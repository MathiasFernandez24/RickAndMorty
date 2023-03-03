import React from 'react'
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const { personaje } = props

    return (
        <Link name="pepitoHonguito" to={`/detail/${personaje.id}`} type="button" class="btn btn-sm ">
            <div class="col">
                <div class="card shadow-sm">
                    <img src={personaje.image} />
                    <div class="card-body">
                        <h2 class="card-text">{personaje.name}</h2>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
