<template>
	<div>
		<!-- <p>login</p>
		<button @click="login()">登录</button> -->
		<el-form class="demo-ruleForm container" label-width="100px">
			<h3>登录系统</h3>
			<el-form-item label="账号">
				<el-input type="password" ></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		name: 'login',
		methods: {
			login() {
				this.$router.push('/')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 350px;
	}
</style>