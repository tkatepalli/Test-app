<template>
	<div class="popup">
		<div class="row">
			<div class="col-6">{{msg}}</div>
			<div class="col-6 text-right">
				<img src="@/assets/images/trash.svg" alt="">
			</div>
		</div>
		<div class="row">
			<div class="col-6"><h4>Dakes Monthly</h4></div>
			<div class="col-6"><span>Nex Offer be available on</span>May 8 2019
				<span></span></div>
		</div>
		<p></p>
	</div>
</template>
<script>
	export default {
  data() {
		return {
		 msg: 'Offer 3',
		}
  }
}
</script>
<style lang="stylus" scoped>
.popup 
	background-color #FFFFFF
	box-shadow 0px 0px 1em rgba(0,0,0,0.15)
	position absolute
	top 3.8em
	left 50%
	right 0
	bottom 0
	height 100%
	padding 2em
	p 
		font-size 1em
		font-weight 500
		color #404040
</style>
