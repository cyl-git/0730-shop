<template>
  <div class="contain">
    商品详情--{{id}}
    <!--加入购物车小球动画 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="bell" v-show="flag" ref="bell"></div>
    </transition>
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
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner buyBox">
          <div class="price">
            <span>
              销售价：
              <b>￥{{goodsInfo.sell_price}}</b>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              市场价：
              <span>￥{{goodsInfo.market_price}}</span>
            </span>
          </div>

          <div>
            购买数量：
            <!-- goodsInfo 是页面发送ajax请求回来的数据，可能会出现nobox 组件先渲染出来,这时候goodsInfo还是空对象，传递到子组件中的stock_quantity就是undifined ,所以在子组件中用props接收到的就是undefined -->
            <nobox :max="goodsInfo.stock_quantity" @func="getSelectedCount" id="cPos"></nobox>
          </div>

          <div>
            <mt-button type="primary" size="small">立即购买</mt-button>

            <mt-button type="danger" size="small" @click="addCar">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品详情区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner goods_xq">
          <p>商品货号：{{goodsInfo.goods_no}}</p>
          <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsInfo.add_time | dateFormat('YYYY-MM-DD')}}</p>
        </div>
      </div>
      <div class="mui-card-footer btnArea">
        <mt-button type="primary" size="large" plain @click="toHref">图文介绍</mt-button>

        <mt-button type="danger" size="large" plain @click="toprdComment">商品评论</mt-button>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../sub_components/swiper.vue";
import nobox from "../sub_components/goodsinfo_nobox.vue";
import comment from "../sub_components/comment.vue";
export default {
  data() {
    return {
      /*  id: this.$route.params.id, */
      flag: false,
      goodsInfo: {},
      thumbsList: [],
      windowHeight: 0,
      count: 1,
    };
  },
  created() {
    this.getGoodsInfo();
    this.getThumbs();
  },
  mounted() {
    this.windowHeight = window.innerHeight;
    /* console.log(this.windowHeight); */
    var _this = this;
    window.onresize = function () {
      _this.windowHeight = window.innerHeight;
      /* console.log(_this.windowHeight); */
    };
  },
  methods: {
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then((res) => {
        if (res.body.status === 0) {
          this.goodsInfo = res.body.message[0];
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
    toHref() {
      this.$router.push("/home/goodsdesc/" + this.id);
    },
    toprdComment() {
      this.$router.push("/home/goodsComment/" + this.id);
    },
    addCar() {
      this.flag = true;
      console.log(this.count);
      //开始调用store中的mutations中的addToCar方法来操作state中的cart购物车 ，这个方法需要传递一个添加的商品id和count
      this.$store.commit("addToCar", {
        id: this.id,
        count: this.count,
      });
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";

      const yyyy = document.querySelector("#cPos").getBoundingClientRect();
      el.style.top = yyyy.top + "px";
    },
    enter(el, done) {
      el.offsetWidth;
      const bellPos = el.getBoundingClientRect();
      const carPos = document.querySelector("#car").getBoundingClientRect();
      var x = carPos.left - bellPos.left + "px";
      var y = carPos.top - bellPos.top + "px";
      el.style.transform = "translate(" + x + "," + y + ")";
      el.style.transition = "all 0.5s  cubic-bezier(.33,-0.44,1,.79)";

      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    getSelectedCount(c) {
      console.log("父组件拿到数值" + c);
      this.count = c;
    },
  },
  props: ["id"],
  components: {
    swiper,
    nobox,
    comment,
  },
};
</script>
<style lang="scss" scoped>
.contain {
  min-height: calc(100vh - 90px);
  background-color: #f7f7f7;
  .buyBox > div {
    margin-top: 10px;
  }
  .price {
    color: #999;
    b {
      font-size: 18px;
      color: red;
    }
    span {
      span {
        text-decoration: line-through;
      }
    }
  }
  .goods_xq > p {
    color: #999;
    margin-bottom: 10px;
  }
  .btnArea {
    display: block;
    > .mint-button {
      margin: 10px 0;
    }
  }

  .bell {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    z-index: 900;
    /* top: 456px; */
    left: 160px;
    /*  transform: translate(78px, 168px); */
  }
}
</style>
