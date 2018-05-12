<template>
  <div id="app">
  <compo></compo>
    <router-view/>
  </div>
</template>

<script>
import Compo from '@/components/comp/Compo'
export default {
  name: 'App',
  components: {
    Compo
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  padding-top: 1rem;
}
</style>
