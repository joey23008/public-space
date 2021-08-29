<template>
    <section id="post-single" :class="['p-0']">
      <mdb-tabs
        :active="0"
        default
        :links="[
          { text: '注文詳細', slot: 'order-detail' },
          { text: '車番連絡', slot: 'car-number-contact' }
        ]"
        :transition-duration="0.5"
        transition-style="linear"
        justify
        :class="['tabs-first']"
      >
        <template :slot="'order-detail'">
          <OrderDetail v-bind="post" @formSubmit="orderDetailSubmit" />
        </template>
        <template :slot="'car-number-contact'">
          <CarNumberContactForm />
        </template>
      </mdb-tabs>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mdbTabs } from 'mdbvue'
import OrderDetail from '~/components/molecules/OrderDetail.vue'
import CarNumberContactForm from '~/components/molecules/CarNumberContactForm.vue'

export default {
  components: {
    mdbTabs,
    OrderDetail,
    CarNumberContactForm
  },
  async asyncData ({ store, route }) {
    await store.dispatch('post/fetchPost', { id: route.params.id })
  },
  computed: {
    ...mapGetters('post', ['post'])
  },
  methods: {
    async orderDetailSubmit (formData) {
      await this.updatePost(formData)
      this.$router.push('/')
    },
    ...mapActions('post', ['updatePost'])
  }
}
</script>
