<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <h1>Kommuner</h1>
        <p>
          Det finns 290 kommuner i Sverige.<br>
          Från Trelleborgs kommun i söder, till Kirunas kommun i norr!
        </p>
        <table v-if="kommunerNames && kommunerSize.data" id="kommunerTable">
          <thead>
            <tr>
              <th>Kommun</th>
              <th>Areal (km²)</th>
              <th>Areal (ha)</th>
              <th>Landareal (km²)</th>
              <th>Landareal (ha)</th>
              <th>Folkmängd</th>
              <th>Befolkningstäthet (inv. per km²)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in kommunerNames.length" :key="i.id">
              <td>{{ kommunerNames[i - 1] }}</td>

              <!-- kommunerSize includes both areal and landareal -->
              <!-- so we need to do some simple math to get the right values -->
              <!-- I also chose to put them in the opposite order they're listed (areal first) -->

              <!-- Areal -->
              <td>{{ kommunerSize.data[(i - 1) * 2 + 1].values[0] }}</td> <!-- km2 -->
              <td>{{ kommunerSize.data[(i - 1) * 2 + 1].values[1] }}</td> <!-- ha -->

              <!-- Landareal -->
              <td>{{ kommunerSize.data[(i - 1) * 2].values[0] }}</td> <!-- km2 -->
              <td>{{ kommunerSize.data[(i - 1) * 2].values[1] }}</td> <!-- ha -->

              <!-- Folkmängd -->
              <td>{{ kommunerPopulation.data[i - 1].values[0] }}</td>

              <!-- Befolkningstäthet -->
              <td>{{ kommunerPopulationDensity.data[i - 1].values[0] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'KommunerView',
  data() {
    return {
      kommunerNames: [],
      kommunerSize: [],
      kommunerPopulation: [],
      kommunerPopulationDensity: []
    }
  },
  mounted() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }

    // POST /kommuner
    fetch("http://localhost:3000/kommuner", options)
    .then(response => response.json())
    .then(data => console.log(this.kommunerSize = data))
    .catch(err => console.log(err.message))

    // GET /kommuner
    fetch("https://sverigedata-backend.herokuapp.com/kommuner")
    .then(response => response.json())
    .then(data => console.log(this.kommunerNames = data))
    .catch(err => console.log(err.message))

    // POST /kommuner/befolkning
    fetch("https://sverigedata-backend.herokuapp.com/kommuner/befolkning", options)
    .then(response => response.json())
    .then(data => console.log(this.kommunerPopulation = data))
    .catch(err => console.log(err.message))

    // POST /kommuner/befolkningstathet
    fetch("https://sverigedata-backend.herokuapp.com/kommuner/befolkningstathet", options)
    .then(response => response.json())
    .then(data => console.log(this.kommunerPopulationDensity = data))
    .catch(err => console.log(err.message))
  }
}
</script>


<style scoped>
</style>
