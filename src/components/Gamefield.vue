<template>
  <div class="gamefield">
    <v-block v-for="(block, index) in map.items" :data="block" :key="index"></v-block>
    <v-block :data="map.hero"></v-block>
  </div>
</template>

<script>
import Block from './Block';

export default {
  name: 'gamefield',
  data () {
    return {
    };
  },
  props: ['map'],
  mounted () {
    const hero = this.map.hero;
    this.keydown = window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37: hero.dir = -1; break;
        case 38: hero.jump(); break;
        case 39: hero.dir = 1; break;
        case 40: hero.croach = true; break;
        default: break;
      }
    });
    this.keyup = window.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
        case 39: hero.dir = 0; break;
        // case 38: hero.ydir = 0; break;
        case 40: hero.croach = false; break;
        default: break;
      }
    });
    setInterval(() => {
      this.map.move();
    }, 10);
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.keydown);
    window.removeEventListener('keyup', this.keyup);
  },
  components: {
    'v-block': Block
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gamefield {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  flex: 90;
}
</style>
