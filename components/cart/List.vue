<template>
  <div class="grid grid-rows-4 grid-flow-col gap-x-[1.688rem] gap-y-[1.875rem] py-[2.375rem]">
    <div class="col-span-2 bg-white rounded-lg overflow-hidden border">
      <div class="border-b px-[1.125rem] py-[0.625rem]">
        <h1 class="font-bold text-2xl">Keranjang</h1>
      </div>
      <div class="border-t px-5 py-[0.625rem]">
        <input type="checkbox" name="cart">
        <label for="cart">Pilih semua Pesanan (0)</label>
      </div>
    </div>
    <div class="row-span-3 col-span-2 bg-white rounded-lg overflow-hidden border">
      <div class="border-b flex items-center px-5">
        <input type="checkbox" name="cart">
        <label-store :cart="true" />
      </div>
      <div class="px-5 py-[1.125rem]">
        <product-cart v-for="i in 2" :key="i" />
      </div>
    </div>
    <div class="row-span-3">
      <div class="bg-white px-2 py-[1.125rem] rounded-[10px] border">
        <h4 class="font-bold">Ringkasan</h4>
        <div class="px-1">
          <div class="flex flex-col gap-y-[0.625rem] border-b py-[0.625rem]">
            <div class="flex justify-between">
              <p>Total Harga:</p>
              <span>{{ 0 | toCurrency }}</span>
            </div>
            <div class="flex justify-between">
              <p>Diskon:</p>
              <span>{{ 0 | toCurrency }}</span>
            </div>
          </div>
          <div>
            <div class="flex justify-between py-[1.125rem]">
              <h6 class="text-gray-text">Total Harga</h6>
              <span class="font-bold">{{ 0 | toCurrency }}</span>
            </div>
            <button class="bg-yellow-primary text-white font-bold text-center w-[15.75rem] rounded-lg py-2">
              Buat Pesanan <span class="font-normal text-white">(0)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>