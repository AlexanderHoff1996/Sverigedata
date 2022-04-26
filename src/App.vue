<!-- TO START -->
<!-- npm run serve -->

<template>
  <div id="app">
    <HeaderComponent />
    <!--
    <ContentComponent />
    <FooterComponent />
    -->
  </div>
  <router-view/>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue'
// import ContentComponent from './components/ContentComponent.vue'
// import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    // ContentComponent,
    // FooterComponent
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
