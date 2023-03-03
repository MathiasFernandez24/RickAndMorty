import React, { useState } from 'react'

export const Footer = () => {
    const year = new Date().getFullYear();
    const nombreDeAutor = "Mathias Fernandez"
    const mailAutor = "mathias_fernandez_24@hotmail.com"
    const [clicks, setClicks] = useState(0)

    const onHandleClick = () => {
        setClicks(clicks + 1)
    }


    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                {/* <p className="col-md-4 mb-0 text-muted">© {year} {nombreDeAutor}</p>
                <p className="col-md-4 mb-0 text-muted"> contacto:  {mailAutor}</p> */}
                {/* <p >Clicks: {clicks}</p> */}

                {/* <button onClick={onHandleClick} type="button" className="btn btn-sm btn-outline-secondary">Click contador</button> */}

                <ul className="nav col-md justify-content-center">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" className="nav-link px-2 text-muted">© {year} {nombreDeAutor}</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" className="nav-link px-2 text-muted">contacto:  {mailAutor}</a></li>
                </ul>
            </footer>
        </div>
    )
}