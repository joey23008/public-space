export const state = () => ({
  posts: []
})

export const getters = {
  posts: state => state.posts
}

export const mutations = {
  addPost (state, post) {
    state.posts.push(post)
  },
  updatePost (state, post) {
    state.posts = state.posts.map(p => (p.id === post.id ? post : p))
  },
  clearPosts (state) {
    state.posts = []
  },
  replacePost (state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async fetchPosts ({ commit }) {
    commit('clearPosts')
    const posts = await this.$axios.$get('/getSampleJson')
    posts.forEach((post) => {
      commit('addPost', post)
    })
  }
  // async publishPost ({ state, commit }, { payload }) {
  //   const postId = ++state.posts.length
  //   const dateObj = new Date
  //   const date = dateObj.toLocaleDateString()
  //   commit('addPost', {
  //     id: postId,
  //     title: payload.title,
  //     body: payload.body,
  //     created_at: date
  //   })
  // },
}
