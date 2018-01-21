<template>
  <div class="container">
    <ul>
      <li><router-link to="/">Main</router-link></li>
      <li><router-link to="/maps">maps</router-link></li>
    </ul>
  </div>
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
