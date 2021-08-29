<template>
  <section id='post-list'>
    <mdb-card v-for="post in posts" v-bind:key="post.id">
      <NuxtLink :to="{ name: 'id', params: { id: post.id } }">
        <mdb-card-body>
          <mdb-card-title>{{post.title}}</mdb-card-title>
          <mdb-card-text>{{post.body}}</mdb-card-text>
          <mdb-card-text>{{post.created_at}}</mdb-card-text>
        </mdb-card-body>
      </NuxtLink>
    </mdb-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText } from 'mdbvue'

export default {
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText
  },
  async asyncData ({ store }) {
    await store.dispatch('posts/fetchPosts')
  },
  computed: {
    showPosts () {
      return this.posts
    },
    ...mapGetters('posts', ['posts'])
  },
  methods: {
    handleClick (post) {
      // this.getSampleJson()
    },
    ...mapActions('posts', ['getSampleJson'])
  }
}
</script>
