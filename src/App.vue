<template>
  <v-app id="app">
    <v-header></v-header>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer app>
      Igor Ch. 2018
    </v-footer>
  </v-app >
</template>

<script>
import Header from './components/Header';
export default {
  name: 'App',
  components: {
    'v-header': Header
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
