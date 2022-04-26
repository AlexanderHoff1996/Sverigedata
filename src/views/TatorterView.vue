<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <h1>Tätorter</h1>
        <p>
          Det finns över 2000 tätorter i Sverige.
          Från små tätorter som Finsta och Runemo, med bara lite över 200 invånare,
          till Sveriges största tätorter som Stockholm, Göteborg, och Malmö.

        </p>

        <!-- This HTML table will be populated with the data from the SCB API -->
        <!-- You need to check that the object exists, otherwise you might get an undefined error -->
        <table v-if="tatorterNames && tatorterData.data" id="tatorterTable">
          <thead>
            <tr>
              <th>Tätort</th>
              <th>Landeral (ha)</th>
              <th>Folkmängd</th>
              <th>Befolkningstäthet (inv. per km²)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in tatorterNames.length" :key="i.id">
              <td>{{ tatorterNames[i - 1] }}</td>           <!-- Vue for range loops start at 1, not 0 -->
              <td>{{ tatorterData.data[i].values[0] }}</td> <!-- i is 1 on the first iteration -->
              <td>{{ tatorterData.data[i].values[1] }}</td> <!-- We're gonna skip 0 because it's -->
              <td>{{ tatorterData.data[i].values[2] }}</td> <!-- the whole country, not just a town -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TatorterView',
  data() {
    return {
      tatorterNames: [],  // This array will store the names of all towns (tätorter)
      tatorterData: []    // This array will store the data of all towns (like population and size)
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  mounted() {
    // This options object is used to tell the server what kind of request we're making (POST)
    // And what kind of data we want back (JSON)
    const options = {
      method: "POST", // You need to use POST requests to get data from the SCB API
      headers: { "Content-Type": "application/json" } // We're dealing with JSON data here
    }

    // We use our backend server (which is on localhost:3000) to get data from the SCB API
    // Our specific "endpoint" for tätorter is /tatorter
    // We use the options object to specify it's a POST request, and that the type is JSON
    fetch("https://sverigedata-backend.herokuapp.com/tatorter", options)
    .then(response => response.json())
    .then(data => console.log(this.tatorterData = data))
    .catch(err => console.log(err.message))
    
    // GET is used to get the names of all towns
    // No options are needed for GET requests, GET is the default fetch method
    fetch("https://sverigedata-backend.herokuapp.com/tatorter")
    .then(response => response.json())
    .then(data => console.log(this.tatorterNames = data))
    .catch(err => console.log(err.message))
  }
}
</script>


<style scoped>
</style>
