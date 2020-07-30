<template>
  <div class='mainApp'>



    <mt-header fixed title="固定在顶部"></mt-header>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>



    <router-view></router-view>
    <div>
       <router-link to="/home">首页</router-link>
    <router-link to="/home">首页</router-link>
    </div>


  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.mainApp {
  border:1px solid #f00;
  box-sizing: border-box;
  padding-top:40px;
  padding-bottom:50px;

}
</style>