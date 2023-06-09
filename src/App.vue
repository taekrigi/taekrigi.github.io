<template>
  <div>{{  title  }}</div>
  <v-container>
    <MapChart
      :countryData="countryData"
      countryStrokeColor="#909090"
      defaultCountryFillColor="#dadada"
    />
  </v-container>
</template> 

<script setup>
import MapChart from 'vue-map-chart'
import countryData from './country-data.json'

const title = "Countries I've ever been to...";
    
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
