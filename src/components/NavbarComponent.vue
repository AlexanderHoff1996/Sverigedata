<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- Start -->
          <li class="nav-item">
            <router-link to="/" class="nav-item nav-link">Start</router-link>
          </li>

          <!-- Tätorter -->
          <li class="nav-item">
            <router-link to="/tatorter" class="nav-item nav-link">Tätorter</router-link>
          </li>

          <!-- Kommuner -->
          <li class="nav-item">
            <router-link to="/kommuner" class="nav-item nav-link">Kommuner</router-link>
          </li>

          <!-- Län -->
          <li class="nav-item">
            <router-link to="/lan" class="nav-item nav-link">Län</router-link>
          </li>
          
          <!--
          Geografi
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Geografi
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/tatorter">Tätorter</router-link>
              <router-link class="dropdown-item" to="/kommuner">Kommuner</router-link>
              <router-link class="dropdown-item" to="/lan">Län</router-link>
            </div>
          </li>

          Befolkning
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Befolkning
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="#">1</router-link>
              <router-link class="dropdown-item" to="#">2</router-link>
            </div>
          </li>

          Ekonomi
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ekonomi
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="#">1</router-link>
              <router-link class="dropdown-item" to="#">2</router-link>
            </div>
          </li>
          -->
        </ul>

        <!-- Sök -->
        <!--
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Sök" aria-label="Sök">
          <button class="btn btn-outline-success" type="submit">Sök</button>
        </form>
        -->
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'NavbarComponent'
}
</script>


<style scoped>
</style>
