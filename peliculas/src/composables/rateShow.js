import { ref, computed } from "vue"

const saveShowArray = ref([])

export function rateShow() {
    const saveShow = ( show, rateType ) => {
        const itemInArray = saveShowArray.value.find((elmnt) => elmnt.id === show.id)
        if( !itemInArray ){
            const newShowAdd = {...show, rate: rateType}

            saveShowArray.value.push( newShowAdd )
        } else {
            if( itemInArray.rate == rateType ){
                const indxShow = saveShowArray.value.findIndex( (elmnt) => elmnt.id == itemInArray.id )
                
                saveShowArray.value.splice(indxShow, 1)
            } else {
                itemInArray.rate = rateType
            }
        }
    }

    const likedShows = computed(() => {
        return saveShowArray.value.filter((elmnt) => elmnt.rate == 'like')
    })

    return {
        saveShowArray,
        saveShow,
        likedShows
    }
}