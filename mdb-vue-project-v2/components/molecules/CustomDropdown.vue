<template>
  <div class="custom-dropdown">
    <vue-select
      :searchable="false"
      :options="items"
      :reduce="item => item.id"
      :inputId="inputId"
      :loading="items.length === 0"
      label="name"
      solo
      @search:blur="onblur"
      @input="onInput"
    />
    <div v-show="overlay" class="dropdown-overlay" @click="findData">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propItems: {
      type: Array,
      required: true
    },
    inputId: {
      type: String,
      required: true
    },
    callbackFunc: {
      type: Function,
      required: true
    }
  },
  watch: {
    propItems (val, oldVal) {
      this.items = val
    }
  },
  data () {
    return {
      mousedownElement: '',
      evt: '',
      overlay: true,
      items: this.propItems
    }
  },
  methods: {
    async findData () {
      console.log('clickOverlay!')
      await this.callbackFunc()
      this.evt.initEvent('mousedown', true, true)
      this.mousedownElement.dispatchEvent(this.evt)
      this.overlay = false
    },
    onblur () {
      console.log('blur!')
      this.overlay = !this.overlay
    },
    onInput (e) {
      this.$emit('input', e)
    }
  },
  mounted () {
    this.mousedownElement = this.$el.querySelector('.vs__dropdown-toggle')
    this.evt = document.createEvent('HTMLEvents')
  }
}
</script>
<style scoped>
.custom-dropdown {
  position: relative;
}
.dropdown-overlay {
  width: 1161px;
  height: 34px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
