<template>
  <div id="app">
  	<Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './skeleton/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
    	msg: 'App',
    };
  },
};
</script>
<style lang="stylus">
</style>
