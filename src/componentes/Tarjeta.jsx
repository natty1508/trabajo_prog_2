export default function Tarjeta({ nombre, eliminar, estado, cambiarEstado }) {
    return (
        <div>
            <p>{nombre}</p>
            <button onClick={eliminar}>X</button>
            <select value={estado} onChange={e => cambiarEstado(e.target.value)}>
                <option value="Pendiente">Pendiente</option>
                <option value="Proceso">Proceso</option>
                <option value="Finalizado">Finalizado</option>
            </select>
        </div>
    )
}
