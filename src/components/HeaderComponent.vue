<template>
  <div class="container">
    <div class="row my-1">
      <div class="col">
        <img src="@/assets/stockholm-banner.jpg" class="img-fluid" alt="Stockholm">
      </div>
    </div>
    <NavbarComponent />
  </div>
</template>


<script>
import NavbarComponent from './NavbarComponent.vue'

export default {
  name: 'HeaderComponent',
  components: {
    NavbarComponent
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
