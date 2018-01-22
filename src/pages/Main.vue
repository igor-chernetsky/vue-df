<template>
  <div class="container">
    <v-header></v-header>
    <v-gamefield :map="map"></v-gamefield>
    <div class="game-info"></div>
  </div>
</template>

<script>
import Gamefield from '../components/Gamefield';
import Header from '../components/Header';
import { getMap, getHero } from '../services/map.service';

export default {
  name: 'Main',
  data () {
    return {
      map: {}
    };
  },
  created () {
    const hero = getHero();
    this.map = getMap(hero);
  },
  components: {
    'v-gamefield': Gamefield,
    'v-header': Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: fixed;
  width: 100%;
  top: 50px;
  left: 0;
  bottom: 100px;
  display: flex;
  flex-direction: column;
}
.game-info {
  background-color: #efefef;
  flex: 10;
}
</style>
