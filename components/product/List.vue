<template>
  <div v-if="products" class="grid grid-cols-6 gap-4">
    <div v-for="product in products" :key="product.id" class="bg-white rounded-[20px] shadow-lg max-w-[12.125rem] cursor-pointer" @click="openProduct(product.id)">
      <div class="w-[12.125rem] h-[9.625rem] rounded-[20px] border overflow-hidden">
        <img :src="product.image" :alt="product.title" class="h-full mx-auto">
      </div>
      <div class="px-[0.875rem] py-4">
        <h2>{{ secret(product.title, 15) }}</h2>
        <h4 class="font-bold">{{ parseFloat((product.price * 14392.65).toFixed(0)) | toCurrency }}</h4>
        <p class="text-xs">{{ secret(product.description, 15) }}</p>
        <span class="text-xs flex items-center text-gray-text">
          <vs-icon color="#FFC107" icon="star" size="0.75rem"></vs-icon>
          ({{ product.rating.rate }}) |Terjual {{ product.rating.count }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: null
    }
  },
  computed: {
    products() {
      return this.$store.state.api.product.products
    }
  },
  async created() {
    const params = {
      category: this.category,
      limit: this.limit
    }
    await this.$store.dispatch('api/product/getProducts', params)
  },
  methods: {
    secret(text, length) {
      text = text.split('')
      const raw = []
      if(text.length > length) {
        for(let i = 0; i <= length; i++) {
          raw.push(text[i])
        }
        return `${raw.join('')}...`
      } 
      return text.join('')
    },
    openProduct(id) {
      if(this.$route.path.includes('detail')) {
        this.$store.commit('api/product/setProductId', id)
      } else {
        this.$router.push({
          name: 'products-detail'
        })
        this.$store.commit('api/product/setProductId', id)
      }
    }
  }
}
</script>

<style>

</style>