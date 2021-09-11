<template>
  <article>
    <v-app>
      <TheHeader />
      <nuxt class="container" />
    </v-app>
  </article>
</template>

<script>
import TheHeader from '~/components/molecules/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>
