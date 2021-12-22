<template>
  <nuxt-link :to="link" class="my-2 px-6 border-l-[1.5px] capitalize border-[#383535]">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    link() {
      return this.text.split(" ").join("-").toLowerCase()
    }
  }
}
</script>

<style>

</style>