<template>
	<div class="container-boxy">
	
		<div id="pika" class="poke">
			<div class="ear"></div>
			<div class="ear"></div>
			<div class="head">
				<div class="eye"></div>
				<div class="eye"></div>
				<div class="cheek"></div>
				<div class="cheek"></div>
				<div class="mouth"></div>
			</div>
			<div class="tail"></div>
		</div>
		
		<div id="squirt" class="poke">
			<div class="head">
				<div class="eye"></div>
				<div class="eye"></div>
				<div class="cheek"></div>
				<div class="cheek"></div>
				<div class="mouth"></div>
			</div>
			<div class="tail"></div>
			<div class="bubble"></div>
		</div>
		
		<div id="char" class="poke">
			<div class="head">
				<div class="eye"></div>
				<div class="eye"></div>
				<div class="cheek"></div>
				<div class="cheek"></div>
				<div class="mouth"></div>
			</div>
			<div class="tail"></div>
		</div>
		
		<div id="bulba" class="poke">
			<div class="ear"></div>
			<div class="ear"></div>
			<div class="head">
				<div class="eye"></div>
				<div class="eye"></div>
				<div class="cheek"></div>
				<div class="cheek"></div>
				<div class="mouth"></div>
			</div>
			<div class="bulbs">
				<div class="bulb"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Pokemon',
		head() {
			return {
				title: 'Pokemon',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />