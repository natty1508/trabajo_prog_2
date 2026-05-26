import Tarjeta from "./Tarjeta"


export default function Listado({tareas, Listadoid, eliminar}) {
    let titulo = "";
switch (Listadoid){
    case 0:
        titulo ="Del dia"
        break;
    case 1:
        titulo ="Trabajo"
        break;
    case 2:
        titulo ="Escuela"
        break;
    }
    return (

    <div>
    <h1>{titulo}</h1>
    <div>
        {tareas.filter((tarea) => {return tarea.categoria == Listadoid}).toSorted((a,b) => a.prioridad - b.prioridad)
        .map((tarjeta,index) => (
            <Tarjeta
                key={tarjeta.id}
                descripcion={tarjeta.descripcion}
                eliminar={() => eliminar(tarjeta.id)}
            />
        ))}
</div>
    </div>
)
}