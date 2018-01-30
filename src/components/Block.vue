<template>
  <div class="block" :style="blockStyle">
    <span v-if="data.dir">{{data.dir === 1 ? '&gt;' : '&lt;'}}</span>
  </div>
</template>

<script>
export default {
  name: 'block',
  data () {
    return {
      // --
    };
  },
  props: ['data'],
  components: {
  },
  computed: {
    blockStyle: function () {
      const data = this.data;
      const height = data.croach ? data.height / 2 : data.height;
      return {
        bottom: data.y + 'px',
        left: data.x + 'px',
        width: data.width + 'px',
        height: height + 'px'
      };
    }
  }
};
</script>

<style scoped>
.block {
  position: absolute;
  background-color: #777;
}
</style>
