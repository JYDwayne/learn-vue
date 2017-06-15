<template>
	<div>
		<!-- <p>login</p>
		<button @click="login()">登录</button> -->
		<el-form :model="userInfo" :rules="rules" ref="userInfo" class="demo-ruleForm container" label-width="40px">
			<h4 class="title">登录系统</h4>
			<el-form-item class="username" prop="username" label="账号">
				<el-input v-model="userInfo.username"></el-input>
			</el-form-item>
			<el-form-item class="password" prop="password" label="密码">
				<el-input v-model="userInfo.password" type="password"></el-input>
			</el-form-item>
			
			<el-checkbox class="memory">记住密码</el-checkbox>
			
			<el-button class="loginBtn" @click="login('userInfo')" type="primary">登录</el-button>
		</el-form>
	</div>
</template>

<script>
	export default{
		name: 'login',
		data() {
			//验证账号为空函数
			var isEmptyOfUsername = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('账号不能为空'));
				}
				setTimeout(() => {
					callback()
				}, 1000)
			}

			//密码非空验证
			var isEmptyOfPassword = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('密码不能为空'));
				} else {
					callback()
				}
			}
			return {
				userInfo: {
					username: '',
					password: '',
				},
				rules: {
					//检查用户名
					username: [
						{validator: isEmptyOfUsername, trigger: 'blur'}
					],
					password: [
						{validator: isEmptyOfPassword, trigger: 'blur'}
					]
				}
			}
		},
		methods: {
			login(formName) {
				//表单非空验证
				console.log(this.$refs[formName]);
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$router.push('/')
					} else {
						return false;
					}
				})
				// return;
				
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