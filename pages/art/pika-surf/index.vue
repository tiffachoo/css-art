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
      <div class="pika-arm pika-arm-left">
        <div class="pika-fingers"></div>
      </div>
      <div class="pika-arm pika-arm-right">
        <div class="pika-fingers"></div>
        <div class="pika-arm-shadow"></div>
      </div>
      <div class="pika-torso">
        <div class="pika-torso-shadow"></div>
        <div class="pika-back-stripes"></div>
        <div class="pika-leg"></div>
      </div>
      <div class="pika-tail pika-tail-1">
        <div class="pika-tail pika-tail-2">
          <div class="pika-tail pika-tail-3">
            <div class="pika-tail pika-tail-4">
              <div class="pika-tail pika-tail-5"></div>
            </div>
          </div>
          <div class="pika-tail-2-highlight"></div>
        </div>
      </div>
    </div>
    <div class="pika-surf">
      <div class="pika-surf-highlight"></div>
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