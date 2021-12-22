<template>
  <div>
    <link-list />
    <product-detail />
    <div class="flex flex-col gap-y-12">
      <div class="flex flex-col gap-y-7">
        <h4 class="capitalize font-bold">Produk Populer Packer</h4>
        <product-list :limit="6" />
      </div>
      <div class="flex flex-col gap-y-7">
        <h4 class="capitalize font-bold">Produk Terakhir Dilihat</h4>
        <product-list :limit="6" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'back',
}
</script>

<style>

</style>