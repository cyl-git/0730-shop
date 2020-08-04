<template>
  <div class="mainApp">
    <div style='height:40px;'>占位</div>
    <mt-header fixed title="固定在顶部"></mt-header>

    
    <transition >
      <router-view style='padding:0 20px;'></router-view>
    </transition>
    



	
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.mainApp {
  box-sizing: border-box;
  height:100%;
  overflow-x:hidden;
  padding-bottom:50px;
}
.v-enter {
   opacity: 0;
   transform: translateX(100%);
}
 .v-leave-to{
   transform: translateX(-100%);
   position:absolute;
}
.v-enter-active,.v-leave-active{
  transition: all 0.4s ease;
}
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1.mui-active[data-v-5ef48958] {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1[data-v-5ef48958] {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
</style>