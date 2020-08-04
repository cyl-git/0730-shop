<template>
  <div>
    <!-- 轮播图 -->
    <div style="height:200px; background-color:red;margin-left:-20px; margin-right:-20px ">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotu" :key="item.img">
          <a :href="item.url">
            <img :src="item.img" />
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 6宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photolist">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">练习我们</div>
          </a>
        </li>
      </ul>
    </div>

    <router-view></router-view>

    
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbotu: [
        {
          url: "http://www.baidu.com",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596110304041&di=dcffe239a50e42e876bc8a09053061cf&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0704%2Fe53c868ee9e8e7b28c424b56afe2066d.jpg",
        },
        {
          url: "http://www.google.com",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596110915033&di=f316fb1e90f7920d76b7dfdddea14cdc&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F3b292df5e0fe99257d8c844b34a85edf8db1712d.jpg",
        },
      ],
    };
  },
  created() {
    console.log("创建组件完成");
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.mint-swipe-item {
  img {
    width: 100%;
    height: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
  .mui-icon {
    border-radius: 50%;
    padding: 10px;
    color: #fff;
    font-size: 32px;
  }
  .mui-media-body {
    font-size: 14px;
  }
  &:nth-child(1) {
    .mui-icon {
      background-color: green;
    }
  }
  &:nth-child(2) {
    .mui-icon {
      background-color: red;
    }
  }
  &:nth-child(3) {
    .mui-icon {
      background-color: steelblue;
    }
  }
  &:nth-child(4) {
    .mui-icon {
      background-color: skyblue;
    }
  }
  &:nth-child(5) {
    .mui-icon {
      background-color: orangered;
    }
  }
  &:nth-child(6) {
    .mui-icon {
      background-color: orange;
    }
  }
}
</style>