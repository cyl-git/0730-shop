<template>
  <div class="contain">
    商品详情--{{id}}
    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" style="height:260px;padding:0">
          <swiper :swiper="thumbsList" :imgname=" 'src' "></swiper>
          <!--  这里使用封装好的swiper组件 ，swiper属性  是提供给，swiper组件使用，用来遍历的数组，imgname属性是你需要给swiper组件提供的数组中用于存放图片路径的一个名称 -->
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            <span>
              销售价：
              <b >￥2199</b>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              市场价：
              <span style='text-decoration: line-through;'>￥2699</span>
            </span>
          </div>

          <div>
            购买数量：
            <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0" data-numbox-max="100">
              <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
              <input class="mui-numbox-input" type="number" />
              <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
            </div>
          </div>

          <p>
            <mt-button type="primary" size='small'>立即购买</mt-button>
            <mt-button type="danger" size='small'>加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品详情区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>
<script>
import swiper from "../sub_components/swiper.vue";
export default {
  data() {
    return {
      /*  id: this.$route.params.id, */
      goodsInfo: {},
      thumbsList: [],
    };
  },
  created() {
    this.getGoodsInfo();
    this.getThumbs();
  },
  methods: {
    getGoodsInfo() {
      this.$http.get("api/getimageinfo/" + this.id).then((res) => {
        if (res.body.status === 0) {
          this.goodsInfo = res.body.message[0];
          console.log(this.goodsInfo);
        } else {
          alert("加载购买详情，数据错误");
        }
      });
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then((res) => {
        if (res.body.status === 0) {
          this.thumbsList = res.body.message;
        } else {
          alert("加载购买商品的轮播图图片，数据错误");
        }
      });
    },

  },
  props: ["id"],
  components: {
    swiper,
  },
};
</script>
<style lang="scss" scoped>
.contain {
  min-height: calc(100vh - 90px);
  background-color: #f7f7f7;
  .price{
  color:#999;
  b{
    font-size: 18px;
    color:red;
  }
  span{
    span{
      text-decoration: line-through;
    }
  }

}
}

</style>
