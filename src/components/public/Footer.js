import React from 'react'
export const Footer = () => {
    const year = new Date().getFullYear();
    const nombreDeAutor = "Mathias Fernandez"
    const mailAutor = "mathias_fernandez_24@hotmail.com"


    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <ul className="nav col-md justify-content-center">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted" >Home</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" className="nav-link px-2 text-muted" target={"_blank"}>© {year} {nombreDeAutor}</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" className="nav-link px-2 text-muted" target={"_blank"}>contacto:  {mailAutor}</a></li>
                </ul>
            </footer>
        </div>
    )
}