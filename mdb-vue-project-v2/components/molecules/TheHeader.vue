<template>
  <mdb-navbar color="info" position="top" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      <mdb-icon icon="user" />
      <span>{{getDateTimeNow()}}</span>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#" active>Home</mdb-nav-item>
        <mdb-nav-item href="#">Features</mdb-nav-item>
        <mdb-nav-item href="#">Pricing</mdb-nav-item>
      </mdb-navbar-nav>
      <form>
        <mdb-input
          type="text"
          class="text-white"
          placeholder="Search"
          aria-label="Search"
          label
          navInput
          waves
          waves-fixed
        />
      </form>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbIcon } from 'mdbvue'
export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbInput,
    mdbIcon
  },
  methods: {
    getDateTimeNow () {
      const youbi = ['日', '月', '火', '水', '木', '金', '土']
      const date1 = new Date()
      const date2 = date1.getFullYear() + '/' +
            (date1.getMonth() + 1) + '/' +
            date1.getDate() + ' ' +
            date1.getHours() + ':' +
            date1.getMinutes() + ' ' +
            youbi[date1.getDay()]
      return date2
    }
  }
}
</script>
