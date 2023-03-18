import React, { useContext, useEffect, useState } from 'react'
import './CarruselMiniCards.css'
import MiniCard from './MiniCard'
import 'animate.css';
import { useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';
import { Context } from '../../context/StaticContext';



const CarruselMiniCards = () => {
    const [arrayCarrusel, setArrayCarrusel] = useState([])
    const { globalGifs, setGlobalGifs } = useContext(Context)
    const { id } = useParams()
    const arrayIds = []

    function obtenerIdsCarrusel(numId) {
        let clave = parseInt(numId);
        //Obtener 4 ids antes de la seleccionada
        for (let i = -4; i < 0; i++) {
            let indice = clave + i
            if (indice < 1) {
                indice = indice + 826
            }
            arrayIds.push(indice)
        }

        //Obtener 4 ids despues de la seleccionada
        for (let i = 1; i < 5; i++) {
            let indice = clave + i
            if (indice > 826) {
                indice = indice - 826
            }
            arrayIds.push(indice)
        }
    }
    console.log(arrayIds);

    obtenerIdsCarrusel(id)


    useEffect(() => {
        const array = []
        console.log(array.length);
        console.log("---------------------------------- ", id);

        const obtenerDatos = async (i) => {
            //OBTENER DATOS DE API
            RickAndMortyService.getCharacterById(i).then(r => {
                console.log(r.name);
                array.push(r)
            })
        }

        if (array.length == 0) {
            for (var i = 0; i < arrayIds.length; i++) {
                console.log(arrayIds[i]);
                obtenerDatos(arrayIds[i])
            }
            setArrayCarrusel(array)
        }
    }, [id])

    return (
        <div class='animate__animated animate__fadeIn animate__slower'>
            <h1 className='MiniCard-title'>More results</h1>
            <div className='CarruselMiniCards-container'>
                {arrayCarrusel.map((i) => <MiniCard personaje={i} />)}
            </div>
        </div >
    )
}

export default CarruselMiniCards