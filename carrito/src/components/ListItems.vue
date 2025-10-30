<script setup>
    import { ref } from 'vue'
    import Item from './Item.vue'

    const emit = defineEmits(['addItemSon'])
    const props = defineProps({
        items: Array
    })
    const itemAddCart = (itemGS) => {
        emit('addItemSon', itemGS)
    }
</script>
    
<template>
    <div class="flex flex-col gap-4 w-full">
        <Item
            v-for="item in props.items"
            :key="item.id"
            :itemDetail="item"
            @addItemGandson="itemAddCart"
        />
    </div>
</template>

<style scoped>

</style>
