export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
}

export const mutations = {
  setUser (state, { user }) {
    state.user = user
    state.isLoggedIn = true
  },
  updateUser (state, { user }) {
    state.user = user
  }
}

export const actions = {
  // async login ({ commit }, { id }) {
  //   commit('setUser', { user })
  // },
  login ({ commit }, { id }) {
    return new Promise(
      (resolve, reject) => {
        commit('setUser', { id })
        resolve()
      }
    )
  }
}
