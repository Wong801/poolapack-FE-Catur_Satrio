export const state = () => ({
  products: [],
  product: null,
  productId: null
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setProduct(state, product) {
    state.product = product
  },
  setProductId(state, id) {
    state.productId = id
  }
}

export const actions = {
  async getProducts({ commit }, params) {
    const { data } = await this.$axios.get('https://fakestoreapi.com/products', {
      params
    })
    await commit('setProducts', data)
  },
  async getProduct({ commit }, id) {
    const { data } = await this.$axios.get(`https://fakestoreapi.com/products/${id}`)
    await commit('setProduct', data)
  }
}

