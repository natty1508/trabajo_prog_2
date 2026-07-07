import Tarjeta from "./Tarjeta"


export default function Listado({ tareas, Listadoid, eliminar, cambiarEstado }) {
    let titulo = ""
    switch (Listadoid) {
        case 0: titulo = "Del dia"; break;
        case 1: titulo = "Trabajo"; break;
        case 2: titulo = "Escuela"; break;
    }

    return (
        <div>
            <h1>{titulo}</h1>
            <div>
                {tareas
                    .filter((tarea) => tarea.categoria == Listadoid)
                    .map((tarjeta) => (
                        <Tarjeta
                            key={tarjeta.id}
                            nombre={tarjeta.nombre}
                            estado={tarjeta.estado}
                            eliminar={() => eliminar(tarjeta.id)}
                            cambiarEstado={(nuevoEstado) => cambiarEstado(tarjeta.id, nuevoEstado)}
                        />
                    ))}
            </div>
        </div>
    )
}
