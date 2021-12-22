<template>
  <div class="bg-white w-full p-[0.875rem] flex justify-between" :class="!cart ? 'rounded-[1.25rem] border' : ''">
    <div class="flex items-start">
      <div class="flex items-start gap-x-[0.375rem] pr-[1.125rem]">
        <img :src="require('~/static/images/store_logo.png')" alt="store logo" class="h-[2.125rem] w-[2.125rem]">
        <div>
          <h4 class="font-bold">Bahtera Bara</h4>
          <h6 class="text-xs text-[#9797AA]">Kab. Bandung</h6>
          <p class="text-xs text-[#9797AA]"><vs-icon color="#FFC107" icon="star" size="0.75rem"></vs-icon><span class="font-bold text-[#9797AA]">5</span> (100 Ulasan)</p>
        </div>
      </div>
      <img :src="require('~/static/svg/verified.svg')" alt="verified">
    </div>
    <div v-if="!cart" class="flex">
      <div class="border-l my-auto">
        <button class="flex items-center gap-x-1 px-[1.125rem]">
          <vs-icon color="#0E1934" icon="link" size="1rem"></vs-icon>
          Copy Link
        </button>
      </div>
      <div class="border-l my-auto">
        <button class="flex items-center gap-x-1 px-[1.125rem]">
          <vs-icon color="#0E1934" icon="share" size="1rem"></vs-icon>
          Share
        </button>
      </div>
      <div class="border-l my-auto">
        <button class="flex items-center gap-x-1 px-[1.125rem]">
          <vs-icon color="#FD4A5B" icon="favorite_border" size="1rem"></vs-icon>
          Favorite
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>