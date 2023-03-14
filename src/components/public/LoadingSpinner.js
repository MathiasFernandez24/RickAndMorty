import React from 'react'
import { Spinner } from 'reactstrap'
import './LoadingSpinner.css'




const LoadingSpinner = () => {


    return (
        <div className='div-padre '>
            <div className='div-hijo animate__animated animate__bounceIn animate__infinite animate__slower'>
                <Spinner className='spinnerReactstrap' color='primary' />
            </div>
        </div>
    )
}

export default LoadingSpinner