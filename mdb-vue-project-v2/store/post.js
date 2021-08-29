export const state = () => ({
  post: {}
})

export const getters = {
  post: state => state.post
}

export const mutations = {
  addPost (state, post) {
    state.post = post
  },
  updatePost (state, post) {
    state.post = post
  },
  clearpost (state) {
    state.post = {}
  },
  replacePost (state, post) {
    state.post = post
  }
}

export const actions = {
  async fetchPost ({ commit }, { id }) {
    commit('clearpost')
    const posts = await this.$axios.$get('/getSampleJson')
    const post = posts.filter(post => post.id === id)
    commit('addPost', post[0])
  },
  updatePost ({ commit }, post) {
    return new Promise((resolve) => {
      commit('updatePost', post)
      resolve()
    })
  }
}
