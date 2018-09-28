<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light">
		  <span class="navbar-brand" href="#"><img src="../assets/images/logo.svg" alt=""></span>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav mr-auto">
		      <li class="nav-item">
		        <router-link :class="{ 'active':$route.name==='idso' }" to="/Idso">IDSO</router-link>
		      </li>
		    </ul>
		    <form class="form-inline my-2 my-lg-0">
		      <ul class="navbar-nav mr-auto">
		        <li>
		          <router-link :class="{ 'active':$route.name==='' }" to="/">CONFIGURATION</router-link>
		        </li>
		        <li>
		          <router-link :class="{ 'active':$route.name==='' }" to="/">DEMO</router-link>
		        </li>
		        <li>
		          <router-link :class="{ 'active':$route.name==='' }" to="/"><img src="../assets/images/user.svg"></router-link>
		        </li>
		      </ul>
		    </form>
		  </div>
		</nav>
	</div>
</template>
<script>
import Base from './Base.vue';

export default {
  components: {
    Base,
  },
  data() {
    return {
      msg: 'This is a Header page',
    };
  },
  methods: {
  },
};
</script>
<style lang="stylus" scoped>
.navbar
	background-color #00AFDB
	padding 0em
	height 3.8em
.navbar-brand
	background-color #13A5CF
	padding 0.5em 1em
	height:100%
a
	color white
	font-size 0.9em
	font-weight 300
	line-height 1.5em
	padding:1.2em 1em
	margin:0em 0.5em
	letter-spacing 0.2px
	transition 0.3s ease-in-out
	font-family 'Roboto Condensed', sans-serif
a:hover
	text-decoration none
	color white
	transition 0.3s ease-in-out
.active
	font-weight 500
	border-bottom 0.2em solid #44596E
.navbar-nav
	height 100%
</style>
