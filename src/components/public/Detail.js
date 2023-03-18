import './Detail.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service'
import CarruselMiniCards from './CarruselMiniCards'

const Detail = () => {
    const [detallePersonaje, setDetallePersonaje] = useState({})
    const { id } = useParams()

    useEffect(() => {
        RickAndMortyService.getCharacterById(id).then((datos) => {
            setDetallePersonaje(datos)
        })
    }, [id])

    return (
        <div class='detail-container'>
            <br />
            <div class='container animate__animated  animate__backInDown'>
                <div class='card-content-container'>
                    <div class="row">
                        <div class="col">
                            <img src={detallePersonaje.image} class="img-fluid rounded-start" alt="Cargando ..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="display-5">Nombre: {detallePersonaje.name}</h1>
                                <h3>Species: {detallePersonaje.species}</h3>
                                <h3>Origin: {detallePersonaje.origin?.name}</h3>
                                <h3>Last Location: {detallePersonaje.location?.name}</h3>
                                <h3>Gender: {detallePersonaje.gender}</h3>
                                <h3>Status: {detallePersonaje.status}</h3>
                                <h3>Character#: {id}/826</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <CarruselMiniCards idPersonaje={id} />
                <Link to={`/`} type="button" class="btn btn-bg btn-outline-light btn-lg">Volver</Link>
            </div>
            <br />
        </div>
    )
}

export default Detail