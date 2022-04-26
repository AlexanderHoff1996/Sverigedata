<template>
  <div class="container">
    <div class="row mt-3">
      <h1>Välkommen till Sverigedata!</h1>
    </div>
    <div class="row">
      <div class="col">
        Det här är en webbsida som samlar data om Sverige.
        Du kan se information om tätorter, kommuner, och län.
        Bara klicka på någon av länkarna i menyn ovan!
        <br><br><br>
        <h2>Lite fakta om Sverige</h2>
        <p>
          Sverige är ett land i norra Europa, och är till ytan faktiskt Europas femte största land.
          Det är 450 295 km² stort, och har 10 452 326 invånare (31 december 2021).<br><br>
          Sverige består utav 21 län och 290 kommuner, och det finns över 2000 tätorter.<br>
          Klicka på länkarna i menyn för att se mer detaljer om dessa!
        </p>
      </div>
      <div class="col-3">
        <img src="@/assets/sweden-map.png" class="img-fluid" alt="Sverigekarta"> 
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'StartView'
}
</script>


<style scoped>
</style>
