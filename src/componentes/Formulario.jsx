import useTarea from "../hooks/useTarea"

export default function Formulario({ guardar, cerrarFormulario }) {
    const [tarea, setDatoTarea] = useTarea()

    const handlerSubmit = (e) => {
    e.preventDefault()
    guardar({ ...tarea })
    cerrarFormulario(e)
    }


return(
    <div onClick={cerrarFormulario}>
        <div onClick={e => e.stopPropagation()}>
            <h1>tarea</h1>

            <select 
            onChange={e => {setDatoTarea('categoria', parseInt(e.target.value))}} value={tarea.categoria}
                > 
                <option value="categoria">Categoria</option>
                <option value="2">Escuela</option>
                <option value="1">Trabajo</option>
                <option value="0">Del dia</option>
            </select>

            <input type="text" placeholder="descripcion..." onChange={e => {setDatoTarea('descripcion', e.target.value)}} value={tarea.descripcion}
            />

            <select onChange={e => {setDatoTarea('prioridad', parseInt(e.target.value))}} value={tarea.prioridad}
                >
                <option value="prioridad">Prioridad</option>
                <option value="0">Alta</option>
                <option value="1">Media</option>
                <option value="2">Baja</option>
            </select>

            <button onClick={handlerSubmit}>Confirmar</button>
        </div>
    </div>

)
}