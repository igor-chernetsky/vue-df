<template>
  <div class="display">
    <v-gamefield :map="map"></v-gamefield>
    <div class="game-info"></div>
  </div>
</template>

<script>
import Gamefield from '../components/Gamefield';
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
    'v-gamefield': Gamefield
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display {
  position: absolute;
  width: 100%;
  top: 70px;
  left: 0;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.game-info {
  background-color: #efefef;
  flex: 10;
}
</style>
