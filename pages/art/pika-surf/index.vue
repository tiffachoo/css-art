<template>
	<div class="pika">
    <div class="pika-head">
      <div class="pika-face">
        <div class="pika-eye pika-eye-left"></div>
        <div class="pika-eye pika-eye-right"></div>
        <div class="pika-nose"></div>
        <div class="pika-mouth">
          <div class="pika-mouth-outline"></div>
          <div class="pika-mouth-inner"></div>
        </div>
        <div class="pika-cheek pika-cheek-left"></div>
        <div class="pika-cheek pika-cheek-right"></div>
      </div>
      <div class="pika-ear pika-ear-left"></div>
      <div class="pika-ear pika-ear-right"></div>
    </div>
    <div class="pika-body">
      <div class="pika-torso"></div>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'pika-surf',
		head() {
			return {
				title: 'pika-surf',
			}
		}
	}
</script>

<style lang="scss" src="./styles.scss" />