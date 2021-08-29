<template>
  <article>
    <TheHeader />
    <nuxt class="container" />
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
