<template>
  <section id='post-list'>
    <CustomDropdown
      :propItems="list"
      :inputId="selectValue"
      :callbackFunc="findList"
      @input="changeValue"
    />
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
import CustomDropdown from '~/components/molecules/CustomDropdown'

export default {
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    CustomDropdown
  },
  async asyncData ({ store }) {
    await store.dispatch('posts/fetchPosts')
  },
  data () {
    return {
      list: [
        { id: '0001', name: 'abc' },
        { id: '0002', name: 'def' },
        { id: '0003', name: 'ghi' }
      ],
      selectValue: '0001'
    }
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
    changeValue (e) {
      console.log('change!')
      this.selectValue = e
    },
    findList () {
      console.log('find!')
      return new Promise((resolve) => {
        this.list = []
        setTimeout(() => {
          this.list = [
            { id: '0001', name: 'abc' },
            { id: '0002', name: 'def' },
            { id: '0003', name: 'ghi' }
          ]
          resolve()
        }, 3000)
      })
    },
    ...mapActions('posts', ['getSampleJson'])
  }
}
</script>
