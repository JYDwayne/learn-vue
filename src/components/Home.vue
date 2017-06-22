<template>
	<el-row class="container">
		<el-col :span='24' class="header">
			<el-col :span='10' class="logo" :class="isCollapsed?'collapsedLogolWidth':'logolWidth'">
				{{isCollapsed?'':showName}}
			</el-col>
			<el-col :span='10'>
				<div class="tools" @click="getCollapsed">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span='4'>
				
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="isCollapsed?'menu-collapsed':'menu-expanded'">
				<!-- 导航菜单折叠前 -->
				<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-if="!isCollapsed">
					<!-- <el-submenu index="1">
				        <template slot="title"><i class="el-icon-message"></i>导航一</template>
				        <el-menu-item index="1-1">选项1</el-menu-item>
				        <el-menu-item index="1-2">选项2</el-menu-item>
				        <el-menu-item index="1-3">选项3</el-menu-item>
				        <el-menu-item index="1-4-1">选项1</el-menu-item>
				    </el-submenu>
				    <el-submenu index="2">
				        <template slot="title"><i class="el-icon-message"></i>导航一</template>
				        <el-menu-item index="1-1">选项1</el-menu-item>
				        <el-menu-item index="1-2">选项2</el-menu-item>
				        <el-menu-item index="1-3">选项3</el-menu-item>
				        <el-menu-item index="1-4-1">选项1</el-menu-item>
				    </el-submenu>
				    <el-menu-item index="1-4-1"><i class="el-icon-message"></i>选项1</el-menu-item> -->
				   	<template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
				   		<el-submenu v-if="!item.leaf" :index="item.name">
				   			<i></i>
				   			<template slot="title">
				   				{{item.name}}
				   			</template>
				   			<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
				   		</el-submenu>
				   		<el-menu-item v-if="item.leaf" :index="item.children[0].path">{{item.children[0].name}}</el-menu-item>
				   	</template>   
				</el-menu>
				<!-- 导航菜单,折叠后 -->
			</aside>
			<section>
				
			</section>
		</el-col>
	</el-row>
</template>

<script>
	export default{
		name: 'home',
		data() {
			return {
				showName: 'VUEADMIN',
				isCollapsed: false
			}
		},
		created() {
			console.log(this.$router.options.routes);
		},
		methods: {
			//塌陷
			getCollapsed () {
				this.isCollapsed = !this.isCollapsed
			},
			//导航栏打开折叠方法
			handleClose() {

			},
			handleOpen() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/vars';
	.container{
		// border: solid 1px red;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		.header{
			height: 60px;
			background: $color-primary;
			color: #fff;
			.logo{
				height: 60px;
				line-height: 60px;
				padding: 0 20px;
				font-size: 22px;
				text-align: left;
				color: #fff;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
			}
			.collapsedLogolWidth{
				width: 60px;
			}
			.logolWidth{
				width: 230px;
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
				// color: #fff;
			}
		}
		.main{
			display: flex;
			width: 100%;
			height: 100%;
			// background: red;
			aside{
				height: 100%;
				width: 230px;
				background: #EEF1F6;
			}
			.menu-expanded{
				width: 230px;
			}
			.menu-collapsed{
				width: 60px;
			}
		}
	}
</style>