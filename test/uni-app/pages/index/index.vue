<template>
	<view class="content">
		<input type="text" v-model="input" placeholder="输入要存储的值" />
		<button @click="setItem" type="primary">存储</button>
		<button @click="getItme" type="primary">读取</button>
		<!-- 使用 vuex-persistedstate 进行状态持久化存储的示例 -->
		<view class="">读取总次数：{{total}}</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	import {
		localStorage
	} from 'mp-storage'

	export default {
		data() {
			return {
				input: ''
			}
		},
		computed: mapState(['total']),
		methods: {
			...mapMutations(['add']),
			setItem() {
				localStorage.test = this.input
				uni.showToast({
					title: '存储成功'
				})
			},
			getItme() {
				uni.showToast({
					title: `读取结果：${localStorage.test}`
				})
				this.add()
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
