import { useState } from "react"

export default function useTarea() {

    const [nombre, setNombre] = useState("")
    const [categoria, setCategoria] = useState(0)
    const [prioridad, setPrioridad] = useState(0)

    const cambiarDato = (campo, valor) => {
        const opciones = {
            nombre: (v) => setNombre(v),
            categoria:   (v) => setCategoria(v),
            prioridad:   (v) => setPrioridad(v)
        }
        opciones[campo](valor)
    }

    return [
        { nombre, categoria, prioridad, estado: "Pendiente" },
        cambiarDato
    ]
}
