<template>
  <div style="margin-left:-10px;margin-right:-10px;">
    <!-- mui 中的 tab-top-webview-main 组件 -->

    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
           
            :class="['mui-control-item', item.id===0? 'mui-active':'' ]"
            v-for="item in cates"
            :key="item.id"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <ul class="imgInfoList">
      <li v-for="item in photolist" :key="item.id">
        <router-link  :to=" '/home/photoxq/'+item.id ">
          <img v-lazy="item.img_url" />
          <div class="imgInfoText">
            <h3>{{item.title}}</h3>
            <p>{{item.zhaiyao}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import mui from "../../lib/mui/dist/js/mui.js";
import { Lazyload } from "mint-ui";

Vue.use(Lazyload);
export default {
  data() {
    return {
      cates: [], //所有图片分类 横向
      photolist: [], //分类下的list数据
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    //http://www.liulongbin.top:3005/api/getimgcategory
    getAllCategory() {
      this.$http.get("api/getimgcategory").then((res) => {
        if (res.body.status === 0) {
          res.body.message.unshift({ id: 0, title: "全部" });
          this.cates = res.body.message;
        } else {
          alert("加载图片分类，数据错误");
        }
      });
    },
    getPhotoListByCateId(cateId) {
      this.$http.get("api/getimages/" + cateId).then((res) => {
        /*  console.log(cateId) */
        if (res.body.status === 0) {
          this.photolist = res.body.message;
          
        } else {
          alert("加载图片分类，数据错误");
        }
      });
    },
  },
};
</script>
<style  lang='scss' scoped>
* {
  touch-action: pan-y;
}
.imgInfoList {
  padding: 10px;
  li {
    margin-bottom: 10px;
    background-color: #ccc;
    position: relative;
    text-align: center;
    img {
      width: 100%;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .imgInfoText {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
      color: #fff;
      text-align: left;
      h3 {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 1.4em;
      }
      p {
        color: #fff;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}

.mui-pull-top-tips {
  position: absolute;
  top: -20px;
  left: 50%;
  margin-left: -25px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  z-index: 1;
}

.mui-bar ~ .mui-pull-top-tips {
  top: 24px;
}

.mui-pull-top-wrapper {
  width: 42px;
  height: 42px;
  display: block;
  text-align: center;
  background-color: #efeff4;
  border: 1px solid #ddd;
  border-radius: 25px;
  background-clip: padding-box;
  box-shadow: 0 4px 10px #bbb;
  overflow: hidden;
}

.mui-pull-top-tips.mui-transitioning {
  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;
}

.mui-pull-top-tips .mui-pull-loading {
  /*-webkit-backface-visibility: hidden;
				-webkit-transition-duration: 400ms;
				transition-duration: 400ms;*/
  margin: 0;
}

.mui-pull-top-wrapper .mui-icon,
.mui-pull-top-wrapper .mui-spinner {
  margin-top: 7px;
}

.mui-pull-bottom-tips {
  text-align: center;
  background-color: #efeff4;
  font-size: 15px;
  line-height: 40px;
  color: #777;
}

.mui-pull-top-canvas {
  overflow: hidden;
  background-color: #fafafa;
  border-radius: 40px;
  box-shadow: 0 4px 10px #bbb;
  width: 40px;
  height: 40px;
  margin: 0 auto;
}

.mui-pull-top-canvas canvas {
  width: 40px;
}

.mui-slider-indicator.mui-segmented-control {
  background-color: #efeff4;
}
</style>