<template>
  <nuxt-link :to="link" class="text-brown-primary">
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