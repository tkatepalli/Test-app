<template>
	<div>
		<span :class="{'process':state==='In Progress', 'review':state==='Ready For Review', 'complete':state==='Completed'}">{{state}}
		</span>
	</div>
</template>
<script>
export default {
  props: ['state'],
  data() {
    return {
     msg: 'Status component'
    }
  }
}
</script>
<style lang="stylus" scoped> 	
.process 
	color #F5A623
	font-size 0.8em
	box-sizing border-box
	font-weight 500
	padding 0.3em 1em
	background-color #FDEFD7
	border 1px solid #F9D18F
	cursor default
.complete 
	box-sizing border-box
	background-color rgba(194,228,190,0.35)
	color #1AB25B
	border 1px solid rgba(47,204,114,0.5)
	font-size 0.8em
	font-weight 500
	padding 0.3em 1em
	cursor default
.review 
	box-sizing border-box
	font-size 0.8em
	color #007DC3
	font-weight 500
	padding 0.3em 1em
	border 1px solid rgba(0,125,195,0.5)
	background-color rgba(0,125,195,0.08)
	cursor default
</style>
