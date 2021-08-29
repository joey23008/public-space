<template>
  <!-- Default form login -->
  <form @submit.prevent="handleClickSubmit">
    <p class="h4 text-center mb-4">
      Sign in
    </p>
    <label for="defaultFormLoginEmailEx" class="grey-text">
      Your email
    </label>
    <input v-model="formData.id" type="email" id="defaultFormLoginEmailEx" class="form-control"/>
    <br/>
    <div class="text-center mt-4">
      <button class="btn btn-indigo" type="submit">Login</button>
    </div>
  </form>
  <!-- Default form login -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import Cookies from 'universal-cookie'

export default {
  asyncData ({ redirect, store }) {
    return {
      isCreateMode: false,
      formData: {
        id: ''
      },
      error: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async handleClickSubmit () {
      // const cookies = new Cookies()
      try {
        await this.login({ ...this.formData })
        // cookies.set('user', JSON.stringify(this.user))
        console.log('done2')
        this.$router.push('/')
      } catch (e) {
        this.error = '認証失敗'
      }
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>
