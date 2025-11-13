import { ref } from "vue"

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

    fetchLista()

    return {
        fetchLista,
        lista,
    }
}