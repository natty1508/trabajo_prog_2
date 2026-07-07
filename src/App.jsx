import { useState, useEffect } from "react"
import { Router, Route, Switch } from 'wouter'
import axios from 'axios'
import Listado from "./componentes/Listado"
import Formulario from "./componentes/Formulario"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import "./App.css"

export default function App() {

    const url = 'https://api-tareas.ctpoba.edu.ar/api/tareas';
	const autorizacion = 48118387;
    const config = {
    headers: { Authorization: autorizacion },
    params: { orden: "DESC" }
    }

    const [tareas, setTareas] = useState([])
    const [catFiltro, setCatFiltro] = useState(-1)

    const Listas = [0,1,2]
    
    const getTareas = () => {
        axios.get(url, config).then(response => {
            setTareas(response.data.tareas)
        }).catch(error => {
        console.error(error);
        })
    }
    
    useEffect(getTareas, []);

    const guardar = (tareaNueva) => {
        axios.post(url, tareaNueva, config).then(() => {
            getTareas();
        }).catch(error => {
        console.error(error);
        })
    }

    const eliminar = (tarea_id) => {
        axios.delete(url + '/' + tarea_id, config).then(() => {
            getTareas();
        }).catch(error => {
        console.error(error);
        })
    }

    const cambiarEstado = (tarea_id, nuevoEstado) => {
        axios.put(url + '/estado/' + tarea_id, { estado: nuevoEstado }, config).then(() => {
            getTareas();
        }).catch(error => {
        console.error(error);
        })
    }


    return (
                <Router>
            <Header />
                <Switch>
                    <Route path="/nueva">
                        <Formulario guardar={guardar}/>
                    </Route>
                    <Route path="/listado">
                        <aside>
                <select onChange={e => setCatFiltro(parseInt(e.target.value))}>
                    <option value="-1">Categoria</option>
                    <option value="2">Escuela</option>
                    <option value="1">Trabajo</option>
                    <option value="0">Del dia</option>
                </select>
            </aside>
            {Listas
            .filter((lista) => {if (catFiltro == -1 || catFiltro == lista) {return true} else {return false}})
            .map((lista) => (
                <Listado
                key={lista}
                tareas={tareas}
                Listadoid={lista}
                eliminar={eliminar}
                cambiarEstado={cambiarEstado}
                />
            ))}
                    </Route>
                    <Route path="/">
                        <h1>Componente APP</h1>
                    </Route>
                    <Route>
                        <h1>Pagina no encontrada</h1>
                    </Route>
                </Switch>
                <Footer />
            </Router>
        )
    }
