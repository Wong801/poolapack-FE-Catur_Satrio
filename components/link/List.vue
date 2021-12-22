<template>
  <div class="py-7">
    <div class="flex gap-x-2">
      <button v-for="(link, i) in links" :key="i" class="text-xs" :class="i === links.length - 1 ? 'text-yellow-primary font-bold' : 'text-gray-text'" @click="goTo(i)">
        {{ link.split('-').join(' ') }} {{ i === links.length - 1 ? '' : '&#10095;' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: []
    }
  },
  mounted() {
    this.links = this.$route.path.split('/')
    this.links.shift()
  },
  methods: {
    goTo(index) {
      const raw = []
      for(let i = 0; i <= index; i++) {
        raw.push(this.links[i])
      }
      this.$router.push({
        name: raw.join('-')
      })
    }
  }
}
</script>

<style>

</style>