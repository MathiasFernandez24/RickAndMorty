import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export const useUserForm = (estadoInicial = {}) => {

    const [form, setForm] = useState(estadoInicial)

    const handleChangues = ({ target }) => {
        const { name, value } = target
        console.log("--", name);
        console.log("++", value);

        setForm({
            ...Form,
            [name]: value,
        })

    }

    return { form, setForm, handleChangues }


}

