import { useState } from "react"
import { Router, Route, Switch } from 'wouter'
import axios from 'axios'
import Listado from "./componentes/Listado"
import Formulario from "./componentes/Formulario"
import Header from "./componentes/Header"
import Footer from "./componentes/footer"
import "./App.css"

const tareasDefault = [
    { id: 1, descripcion: "Pasear al perro", categoria: 0, prioridad: 0, estado: "Pendiente" },
    { id: 2, descripcion: "Asistente de chef", categoria: 1, prioridad: 1, estado: "Finalizado" },
    { id: 3, descripcion: "Funciones cuadráticas", categoria: 2, prioridad: 0, estado: "Proceso" },
]

export default function App() {

    const [tareas, setTareas] = useState(tareasDefault)
    const [catFiltro, setCatFiltro] = useState(-1)
    const [prioFiltro, setPrioFiltro] = useState(-1)

    const listas = [0, 1, 2]

    const guardar = (tareaNueva) => {
        setTareas([...tareas, tareaNueva])
    }

    const eliminar = (tarea_id) => {
        setTareas(tareas.filter((tarea) => tarea.id != tarea_id))
    }

    const cambiarEstado = (tarea_id, nuevoEstado) => {
        const nuevasTareas = tareas.map((tarea) =>
            tarea.id == tarea_id ? { ...tarea, estado: nuevoEstado } : tarea
        )
        setTareas(nuevasTareas)
    }


    return (
                <Router>
            <Header />
                <Switch>
                    <Route path="/nueva">
                        <Formulario />
                    </Route>
                    <Route path="/listado">
                        <aside>
                <select onChange={e => setCatFiltro(parseInt(e.target.value))}>
                    <option value="-1">Categoria</option>
                    <option value="2">Escuela</option>
                    <option value="1">Trabajo</option>
                    <option value="0">Del dia</option>
                </select>
                <select onChange={e => setPrioFiltro(parseInt(e.target.value))}>
                    <option value="-1">Prioridad</option>
                    <option value="0">Alta</option>
                    <option value="1">Media</option>
                    <option value="2">Baja</option>
                </select>
            </aside>
                        <Listado
                        catFiltro={catFiltro}
                        Listadoid={0}
                        />
                        <Listado
                        catFiltro={catFiltro}
                        Listadoid={1}
                        />
                        <Listado
                        catFiltro={catFiltro}
                        Listadoid={2}
                        />
                    </Route>
                    <Route path="/">
                        <h1>Componente APP</h1>
                    </Route>
                    <Route>
                        <h1>Pagina no encontrada</h1>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>

    )
}

