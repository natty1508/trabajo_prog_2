export default function Tarjeta({descripcion, eliminar}){
    return (
        <div>
            <p>{descripcion}</p>
            <button onClick= {eliminar}>X</button>
            <select name="" id="">
                <option value="pendienteTar">pendiente</option>
                <option value="procesoTarj">proceso</option>
                <option value="finalizadoTarj">finalizado</option>
            </select>
        </div>
    )
}