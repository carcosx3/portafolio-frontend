<script setup>
    const emit = defineEmits(['addItemGandson'])
    const props = defineProps({
        itemDetail: Object
    })

    const handleClick = () => {
        emit('addItemGandson', props.itemDetail )
    }
</script>

<template>
    <div class="border-2 border-gray-600 rounded shadow p-2">
        <h3 class="text-center sm:text-left">{{ props.itemDetail.title }}</h3>

        <div class="flex flex-wrap gap-y-2 mt-5">
            <div class="w-full sm:w-1/5">
                <img :src="props.itemDetail.images[0]" alt="">
            </div>
            <div class="flex flex-wrap flex-col justify-between w-full sm:w-4/5 pl-0 sm:pl-3">
                <div class="w-full">
                    <p>{{ props.itemDetail.description }}</p>
                </div>
                <div class="w-full text-right">
                    <button class="transition inline-block bg-sky-700 p-2 text-white font-semibold hover:bg-sky-500" type="button" @click="handleClick">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>