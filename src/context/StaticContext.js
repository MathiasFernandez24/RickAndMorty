import React, { useState } from 'react'

export const Context = React.createContext({})


export function StaticContextProvider({ children }) {
    const [globalGifs, setGlobalGifs] = useState([])

    return (
        <Context.Provider value={{ globalGifs, setGlobalGifs }}>
            {children}
        </Context.Provider>
    )
}



