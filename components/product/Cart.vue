<template>
  <div class="border-b">
    <div class="flex items-center gap-x-[0.875rem] h-min">
      <input type="checkbox" name="">
      <div class="w-20 h-20">
        <img :src="product.image" :alt="product.title" class="h-full w-auto">
      </div>
      <div>
        <h2 class="font-bold text-lg">{{ product.title }}</h2>
        <div class="pt-4">
          <p>MOQ: 100 Meter</p>
          <p class="text-sm">Kelipatan Order: 100 Meter</p>
        </div>
      </div>
    </div>
    <div class="py-[2.375rem] pl-32 flex gap-x-[1.125rem]">
      <div class="px-[0.875rem] py-1 flex items-center gap-x-[0.625rem] min-w-[20.625rem] border rounded-lg">
        <p>Varian:</p>
        <button class="flex items-center justify-between w-full">
          <div class="flex items-center gap-x-[0.325rem]">
            <div class="h-[1.625rem] w-[1.625rem]">
              <img :src="product.image" alt="" class="h-full w-auto">
            </div>
            <p>Lorem ipsum</p>
          </div>
          <vs-icon color="#9797AA" icon="expand_more"></vs-icon>
        </button>
      </div>
      <p>{{ 0 | toCurrency }}/Meter</p>
      <input-number v-model="value" :cart="true"  />
      <p>{{ 0 | toCurrency }}</p>
      <span class="text-[#EEF2F5]">|</span>
      <vs-icon color="#FD4A5B" icon="delete_outline"></vs-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      },
      value: 0
    }
  }
}
</script>

<style>

</style>