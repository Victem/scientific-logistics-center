<template>
  <section class="main-page">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </section>
</template>

<script>
// @ is an alias to /src

import NavBar from '../components/layout/NavBar'
export default {
  name: 'main-page',
  components: {
    NavBar
  }
}
</script>
