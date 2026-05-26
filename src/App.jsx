import { useState } from "react"
import Listado from "./componentes/Listado"
import Formulario from "./componentes/Formulario"
import "./App.css"

const tareasDefault = [
    { id: 1, descripcion: "Pasear al perro",      categoria: 0,  prioridad: 0,  estado: "Pendiente" },
    { id: 2, descripcion: "Asistente de chef",    categoria: 1,  prioridad: 1, estado: "Finalizado" },
    { id: 3, descripcion: "Funciones cuadráticas",categoria: 2,  prioridad: 0,  estado: "Proceso" },
]

export default function App (){
    const [tareas, setTareas] = useState(tareasDefault)
    const [formAbierto, setForm] = useState(false)

    const abrirFormulario = (e) => {
        if (e.target === e.currentTarget) {
            setForm(!formAbierto)
        }
    }

    const [catFiltro, setCatFiltro] = useState(-1)
    const [prioFiltro, setPrioFiltro] = useState(-1)

    const listas = [0,1,2];

    const guardar = (tareaNueva) => {
        const tareasNuevas = [...tareas]
        tareasNuevas.push(tareaNueva)
        setTareas((tareasNuevas))
    }

    const eliminar = (tarea_id) =>{
    const tareaNueva = tareas.filter((tarea) => tarea.id != tarea_id)
    setTareas(tareaNueva);
    }

    return(

    <div>
        {formAbierto && (<Formulario guardar={guardar} cerrarFormulario={abrirFormulario}/>)}
        <aside>
            <button onClick={abrirFormulario}>Tareas + </button>
                <select onChange={e =>{setCatFiltro(parseInt(e.target.value))}}>
                    <option value="-1">Categoria</option>
                    <option value="2">Escuela</option>
                    <option value="1">Trabajo</option>
                    <option value="0">Del dia</option>
                </select>
                <select onChange={e => {setPrioFiltro(parseInt(e.target.value))}}> 
                    <option value="-1">Prioridad</option>
                    <option value="0">Alta</option>
                    <option value="1">Media</option>
                    <option value="2">Baja</option>
                </select>
        </aside>

        <div>
            <h1>Tareas</h1>
            <div>
            {listas.filter((lista) => {return (lista == catFiltro || catFiltro == -1)}).map((lista, index) => (
                <Listado key={index} eliminar={(tarea_id) => eliminar(tarea_id)} tareas={tareas.filter((tarea) => {return tarea.categoria == lista && (prioFiltro == -1 || prioFiltro == tarea.prioridad)})} Listadoid={lista} />
            ))}
            </div>
        </div>


    </div>
    )
}
