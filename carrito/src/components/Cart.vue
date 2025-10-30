<script setup>
    import { ref, defineEmits } from 'vue'
    const emit = defineEmits(['modifyAmount'])

    const props = defineProps({
        items: Array,
        totalPrice: Number
    })
    const handleClick = ( operation, id ) => {
        emit('modifyAmount', {
            typeOperation: operation,
            idArray: id
        } )
    }
</script>

<template>
    <div class="w-full">
        <h2 class="sm:text-right">carrito</h2>

        <div class="flex flex-wrap p-2 border-b-2 mb-2">
            <!-- <div class="w-full" v-if="carrito">
                <h3 class="text-center">carrito Vacio</h3>
            </div> -->
            <div class="w-full border rounded p-2 mb-2" 
            v-for="item in props.items" 
            :key="item.id">
                <p>{{ item.itemS.title }}</p>
                <div class="flex gap-1 items-center">
                    <div class="flex flex-wrap items-center gap-2 w-2/5">
                        <button class="inline-block p-1 bg-sky-500 text-white" type="button" @click="handleClick('-', item.itemS.id)">-</button>
                        <p>{{ item.cantidad }}</p>
                        <button class="inline-block p-1 bg-sky-500 text-white" type="button" @click="handleClick('+', item.itemS.id)">+</button>
                    </div>
                </div>
            </div>
            <div class="w-full">
                Total: {{props.totalPrice}}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>