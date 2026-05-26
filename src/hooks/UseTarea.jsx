import { useState } from "react"
let id = 2

export default function useTarea() {
    const [descripcion, setDescripcion] = useState("")
    const [categoria,   setCategoria]   = useState(0)
    const [prioridad,   setPrioridad]   = useState(0)
    id++;

const cambiarDato = (campo, valor) => {
    const opciones = {
        descripcion: (v) => setDescripcion(v),
        categoria:   (v) => setCategoria(v),
        prioridad:   (v) => setPrioridad(v),
    }
    opciones[campo](valor)
}

    return [
    { id, descripcion, categoria, prioridad, estado: "Pendiente" },
    cambiarDato,
]
}