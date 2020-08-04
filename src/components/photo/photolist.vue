<template>
  <div style="margin-left:-20px;margin-right:-20px;">
    <!-- mui 中的 tab-top-webview-main 组件 -->

    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">生活</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">电影</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">动漫</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/dist/js/mui.js";
import viewjs from "../../lib/mui/dist/js/webviewGroup.js";

export default {
  data() {
    return {};
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {},
};
</script>
<style scoped>
* {
  touch-action: pan-y;
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