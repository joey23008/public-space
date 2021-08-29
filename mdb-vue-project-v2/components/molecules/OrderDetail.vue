<template>
  <mdb-container class="order-detal-form">
    <h3 class="text-align-left">注文詳細</h3>
    <mdb-jumbotron class="text-center hoverable">
      <form @submit.prevent="$emit('formSubmit', formData)">
        <mdb-tbl>
          <mdb-tbl-body>
            <tr>
              <td class="w-25">
                <label for="post-title" class="mb-0">Your name</label>
              </td>
              <td>
                <input type="text" id="post-title" class="form-control" v-model="formData.title">
              </td>
            </tr>
            <tr>
              <td>
                <label for="post-created-at" class="mb-0">Your email</label>
              </td>
              <td>
                <input type="date" id="post-created-at" class="form-control" v-model="formData.created_at">
              </td>
            </tr>
            <tr>
              <td class="w-25">
                <label for="post_body" class="mb-0">Your name</label>
              </td>
              <td>
                <textarea type="text" id="post_body" class="form-control" rows="3" v-model="formData.body"></textarea>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <mdb-btn color="cyan" type="submit">Register</mdb-btn>
              </td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
      </form>
    </mdb-jumbotron>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbJumbotron, mdbBtn, mdbTbl, mdbTblBody } from 'mdbvue'
export default {
  name: 'OrderDetail',
  components: {
    mdbContainer,
    mdbJumbotron,
    mdbBtn,
    mdbTbl,
    mdbTblBody
  },
  // props: ['id', 'title', 'body', 'created_at'],
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    created_at: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      formData: {
        id: this.id,
        title: this.title,
        body: this.body,
        created_at: this.created_at
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.order-detal-form td {
  border: none;
  vertical-align: middle;
  padding: 0 0 20px 0;
  text-align: left;
  width: 50%;
}
</style>
