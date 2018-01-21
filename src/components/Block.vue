<template>
  <div class="block" v-bind:style="blockStyle">
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
