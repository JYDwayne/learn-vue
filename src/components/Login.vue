<template>
	<div>
		<!-- <p>login</p>
		<button @click="login()">登录</button> -->
		<el-form class="demo-ruleForm container" label-width="40px">
			<h4 class="title">登录系统</h4>
			<el-form-item class="username" label="账号">
				<el-input ></el-input>
			</el-form-item>
			<el-form-item class="password" label="密码">
				<el-input type="password"></el-input>
			</el-form-item>
			
			<el-checkbox class="memory">记住密码</el-checkbox>
			
			<el-button class="loginBtn" type="primary">登录</el-button>
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
		box-shadow: 0 0 25px #cac6c6;

		margin: 180px auto;
		padding: 35px 35px 15px;
		.title{
			margin: 0 0 25px 0;
		}
		.loginBtn{
			width: 100%;
		}
		.username{
			// width: 100%;
			margin-left: 0;
		}
		.password{
			width: 100%;
		}
		.memory{
			margin-bottom: 35px;
			position: relative;
			left: -132px;
		}

	}
</style>