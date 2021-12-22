export const state = () => ({
  email: '',
  jwt: ''
})

export const mutations = {
  setUser(state, payload) {
    state.email = payload.email
    state.jwt = payload.jwt
  }
}

export const actions = {
  async login({ commit }, payload) {
    try {
      const { data } = await this.$axios.post('https://wong801-portfolio.herokuapp.com/api/user/login', {
        username: 'test',
        password: 'test1234'
      })
      commit('setUser', {email: payload, jwt: data.token})
      return true
    } catch (error) {
      return false
    }
  }
}

