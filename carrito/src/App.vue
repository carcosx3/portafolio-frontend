<script setup>
  import { ref, onMounted, computed } from 'vue'
  import ListItems from './components/ListItems.vue'
  import Cart from './components/Cart.vue'
  
  const itemsArray = ref([])
  const loading = ref([true])
  const itemsFetch = async() => {
    await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
      .then( response => response.json() )
      .then( data => {
        itemsArray.value = data
        // console.log(data)
      })
      .catch( error => console.error(error) )
      .finally(() => loading.value = false )
  }
  const carrito = ref([])
  const itemCart = (itemS) => {
    const itemInCart = carrito.value.find( (item) => item.itemS.id == itemS.id )

    if( itemInCart ){
      itemInCart.cantidad += 1
    } else {
      const nuevoItem = { itemS, cantidad: 1 }

      carrito.value.push(nuevoItem)
    }
  }
  const modifyAmountItem = ( dataItem ) => {
    const { typeOperation, idArray } = dataItem
    const changeAmount = carrito.value.find( (item) => item.itemS.id == idArray )

    if( typeOperation == '-' ){
      if( changeAmount.cantidad == 1 ){
        carrito.value.find( (item, index) => {
          if( item.itemS.id === idArray )
            carrito.value.splice(index, 1)
        })
      } else {
        changeAmount.cantidad -= 1
      }
    } else {
      changeAmount.cantidad += 1
    }
  }
  const total = computed(() => {
    return carrito.value.reduce((acomulador, item) => {
      return acomulador + (item.itemS.price * item.cantidad)
    }, 0)
  })

  onMounted(() => {
    itemsFetch()
  })
</script>

<template>
  <div class="p-2">
    <div class="w-full mb-5">
      <h1 class="text-center text-4xl">Carrito</h1>
    </div>

    <div v-if="loading">
      <h2 class="text-center text-lg">Cargando Informacion</h2>
    </div>
    <div class="flex flex-wrap" v-else>
      <div class="w-full">
        <Cart 
          :items="carrito"
          :totalPrice="total"
          @modifyAmount="modifyAmountItem"
        />
      </div>
      <div class="hidden w-2/5 md:w-1/5 sm:block">
        Filtros
      </div>
      <div class="w-full sm:w-3/5 md:w-4/5">
        <ListItems
          :items="itemsArray"
          @addItemSon="itemCart"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
