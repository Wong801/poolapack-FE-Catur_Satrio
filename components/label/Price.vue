<template>
  <div>
    <div v-if="discount" class="bg-yellow-primary border-r-[#4B1412] border-r-2 rounded-l-[6px] py-[1.5px] px-6">
      <div class="relative">
        <i class="absolute w-full border border-[#FD4A5B] top-1/2 rotate-[-4.5deg]"></i>
        <p class="text-[0.563rem] text-center">{{ price | toCurrency }}</p>
      </div>
      <p class="text-xs">{{ priceAfter | toCurrency }}</p>
    </div>
    <div v-else class="bg-[#E5E5E5] border-r-[#4B1412] border-r-2 px-6 py-2">
      <p class="text-xs text-center">{{ price | toCurrency }}</p>
    </div>
    <div class="flex justify-end">
      <div class="bg-[#4B1412] px-[0.594rem] rounded-b-[5px] py-px">
        <p class="text-[0.5rem] text-white">1000 meter</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    discount: {
      type: Boolean,
      default: false
    },
    priceAfter: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>

</style>