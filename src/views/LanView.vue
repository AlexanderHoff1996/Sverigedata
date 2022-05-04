<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <h1>Län</h1>
        <p>
          Sverige består av 21 län.
        </p>
        <p id="missing-values-text">
          Två prickar (..) betyder att värde saknas.
        </p>
        <table v-if="lanNames && lanSize.data" id="lanTable">
          <thead>
            <tr>
              <th>Län</th>
              <th>Areal (km²)</th>
              <th>Areal (ha)</th>
              <th>Landareal (km²)</th>
              <th>Landareal (ha)</th>
              <th>Folkmängd</th>
              <th>Befolkningstäthet (inv. per km²)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in lanNames.length" :key="i.id">
              <td>{{ lanNames[i - 1] }}</td>

              <!-- lanSize includes both areal and landareal -->
              <!-- so we need to do some simple math to get the right values -->
              <!-- I also chose to put them in the opposite order they're listed (areal first) -->

              <!-- Areal -->
              <td>{{ lanSize.data[(i - 1) * 2 + 1].values[0] }}</td> <!-- km2 -->
              <td>{{ lanSize.data[(i - 1) * 2 + 1].values[1] }}</td> <!-- ha -->

              <!-- Landareal -->
              <td>{{ lanSize.data[(i - 1) * 2].values[0] }}</td> <!-- km2 -->
              <td>{{ lanSize.data[(i - 1) * 2].values[1] }}</td> <!-- ha -->

              <!-- Folkmängd -->
              <td>{{ lanPopulation.data[i - 1].values[0] }}</td>

              <!-- Befolkningstäthet -->
              <td>{{ lanPopulationDensity.data[i - 1].values[0] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'lanView',
  data() {
    return {
      lanNames: [],
      lanSize: [],
      lanPopulation: [],
      lanPopulationDensity: []
    }
  },
  mounted() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }

    // POST /lan
    fetch("https://sverigedata-backend.herokuapp.com/lan", options)
    .then(response => response.json())
    .then(data => console.log(this.lanSize = data))
    .catch(err => console.log(err.message))

    // GET /lan
    fetch("https://sverigedata-backend.herokuapp.com/lan")
    .then(response => response.json())
    .then(data => console.log(this.lanNames = data))
    .catch(err => console.log(err.message))

    // POST /lan/befolkning
    fetch("https://sverigedata-backend.herokuapp.com/lan/befolkning", options)
    .then(response => response.json())
    .then(data => console.log(this.lanPopulation = data))
    .catch(err => console.log(err.message))

    // POST /lan/befolkningstathet
    fetch("https://sverigedata-backend.herokuapp.com/lan/befolkningstathet", options)
    .then(response => response.json())
    .then(data => console.log(this.lanPopulationDensity = data))
    .catch(err => console.log(err.message))
  }
}
</script>


<style scoped>
</style>
