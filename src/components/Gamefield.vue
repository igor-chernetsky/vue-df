<template>
  <div class="gamefield" :style="{width: styles.width, height: styles.height, bottom: styles.bottom + 'px', left: styles.left + 'px'}">
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
      styles: {
        bottom: 0,
        left: 0,
        width: this.map.width + 'px',
        height: this.map.height + 'px',
        interval: undefined
      }
    };
  },
  props: ['map'],
  mounted () {
    const hero = this.map.hero;
    this.keydown = window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37: hero.xdir = -1; break;
        case 38: hero.jump(); break;
        case 39: hero.xdir = 1; break;
        case 40: hero.croach = true; break;
        default: break;
      }
    });
    this.keyup = window.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
        case 39: hero.xdir = 0; break;
        // case 38: hero.ydir = 0; break;
        case 40: hero.croach = false; break;
        default: break;
      }
    });

    const setStyles = (size) => {
      const hero = this.map.hero;
      if (size.width < this.map.width) {
        if (hero.x <= size.leftOffset) {
          this.styles.left = 0;
        } else if (this.map.width - hero.x <= size.leftOffset) {
          this.styles.left = size.maxOffset;
        }
        if (hero.x > size.leftOffset && this.map.width - hero.x > size.leftOffset) {
          this.styles.left = size.leftOffset - hero.x;
        }
      }
      if (size.height < this.map.height) {
        const bottomOffset = size.width / 2;
        if (hero.y > bottomOffset) {
          this.styles.bottom = bottomOffset - hero.y;
        }
      }
    };
    const size = {
      width: this.$el.parentElement.offsetWidth,
      height: this.$el.parentElement.offsetHeight
    };
    size.maxOffset = size.width - this.map.width;
    size.leftOffset = size.width / 2;
    this.interval = setInterval(() => {
      this.map.move();
      setStyles(size);
    }, 10);
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.keydown);
    window.removeEventListener('keyup', this.keyup);
    clearInterval(this.interval);
  },
  components: {
    'v-block': Block
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gamefield {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  flex: 90;
  position: absolute;
}
</style>
