import { useState } from "react"

export default function useTarea() {
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState(0)
    const [prioridad, setPrioridad] = useState(0)

    const cambiarDato = (campo, valor) => {
        const opciones = {
            descripcion: (v) => setDescripcion(v),
            categoria:   (v) => setCategoria(v),
            prioridad:   (v) => setPrioridad(v),
        }
        opciones[campo](valor)
    }

    return [
        { descripcion, categoria, prioridad, estado: "Pendiente" },
        cambiarDato,
    ]
}