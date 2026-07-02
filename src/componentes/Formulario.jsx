import useTarea from "../hooks/useTarea"
export default function Formulario({ guardar }) {
    const [tarea, setDatoTarea] = useTarea()

    const handlerSubmit = (e) => {
        e.preventDefault()
        guardar(tarea)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", minWidth: "200px", }}>
            <h1>Nueva Tarea</h1>
            <select onChange={e => setDatoTarea('categoria', parseInt(e.target.value))} value={tarea.categoria}>
                <option value="0">Del dia</option>
                <option value="1">Trabajo</option>
                <option value="2">Escuela</option>
            </select>
            <input
                type="text"
                placeholder="descripcion..."
                onChange={e => setDatoTarea('descripcion', e.target.value)}
                value={tarea.descripcion}
            />
            <select onChange={e => setDatoTarea('prioridad', parseInt(e.target.value))} value={tarea.prioridad}>
                <option value="0">Alta</option>
                <option value="1">Media</option>
                <option value="2">Baja</option>
            </select>
            <button type="submit" onClick={handlerSubmit}>Confirmar</button>
        </div>
    )
}