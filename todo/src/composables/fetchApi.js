import { onMounted, ref } from "vue"

const lista = ref([])

export function fetchTareas () {
    const fetchLista = async() => {
        await fetch( 'https://localhost:7018/api/Tareas' )
            .then( res => res.json() )
            .then( data => {
                console.log(data)
                lista.value = data 
            })
            .catch( err => console.debug( err.msg ) )
    }

    const toggleCompleted = async(tarea) => {
        console.log(`Actualizando Tarea: ${tarea.id}, Nuevo Estado: ${tarea.completada}`)

        try{
            const { data, error } = await useFetch(`https://localhost:7018/api/Tareas/${tarea.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarea)
            })

            if( !response.ok ){
                throw new Error('Error al actualizar la tarea')
            }

            console.log('Tarea Actualizada en la BD!')
        }
        catch( error ){
            console.debug( error.message )
        }
    }

    onMounted(() => {
        fetchLista()
    })

    return {
        fetchLista,
        lista,
        toggleCompleted,
    }
}