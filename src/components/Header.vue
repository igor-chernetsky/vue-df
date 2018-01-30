<template>
  <v-toolbar app>
    <v-toolbar-title>Flat Defrag</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Main</v-btn>
      <v-btn flat to="/maps">Maps</v-btn>
      <v-btn flat to="/mapmanager">Manager</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
