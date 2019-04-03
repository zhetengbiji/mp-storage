<template>
	<view class="content">
		<input type="text" v-model="value" placeholder="输入要存储的值" />
		<button @click="setItem" type="primary">存储</button>
		<button @click="getItme" type="primary">读取</button>
	</view>
</template>

<script>
	import {
		localStorage,
		sessionStorage,
	} from '../../../../index.js'

	export default {
		data() {
			return {
				value: ''
			}
		},
		onLoad() {

		},
		methods: {
			setItem() {
				localStorage.test = this.value
				uni.showToast({
					title: '存储成功'
				})
			},
			getItme() {
				uni.showToast({
					title: `读取结果: ${localStorage.test}`
				})
			}
		}
	}
</script>

<style>
	.content {
		padding: 20px;
	}

	input {
		border: 1px solid #cccccc;
		margin: 5px 0;
		padding: 5px;
	}

	button {
		margin: 5px 0;
	}
</style>
