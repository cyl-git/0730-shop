<template>
  <div class="goods_list">
    <router-link tag="div" class="prd_list" v-for="item in goodslist" :key="item.id" :to=" '/home/goodsxq/'+item.id " >
      <div class="imgBox">
        <img :src="item.img_url" width="100%" />
      </div>
      <h3>
        <b>{{item.id}}-----{{item.title}}</b>
      </h3>
      <div class="foot">
        <div>
          <b>￥ {{item.sell_price}}</b>
          <span>￥{{item.market_price}}</span>
        </div>
        <p>
          <span>热卖中</span>
          <span>剩余 {{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>

    <div class="clear"></div>
    <div class='bottom_btn'><mt-button type="primary" size="large"  @click="getMoreGoods">加载更多</mt-button></div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      page: 1,  //默认展示第一页的数据
      goodslist: [], //商品列表
      isloaded:false

    };
  },
  created() {
    this.getGoodsList(1);
 
  },
  methods: {
    getGoodsList(id) {

      //根据页码获取商品列表
      this.$http.get("api/getgoods?pageindex="+this.page).then((res) => {
        if (res.body.status === 0) {
          /*  res.body.message.unshift({ id: 0, title: "全部" }); */
          
         
          if(res.body.message.length===0 && id !== 1){
              this.isloaded=true
              Toast('没有更多了')
              return;
          }
          this.goodslist = this.goodslist.concat(res.body.message);
        console.log(res.body.message);
        } else {
          alert("加载图片分类，数据错误");
        }
      })



    },
    getMoreGoods(){
        //如果没有更多数据了  就不再执行下面的代码了
        if(this.isloaded) return
        this.page ++
         this.getGoodsList();

    }

  },
};
</script>
<style lang="less" scoped>
.prd_list {
  width: 48%;
  float: left;
  border: 1px solid #fff;
  border-radius: 3px;
  box-shadow: 0px 0 4px #999;
  margin-top: 10px;
  * {
    margin: 0;
  }
  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 170px;
    overflow: hidden;
    img {
      display: block;
    }
  }
  h3 {
    font-size: 14px;
     line-height: 1.4em;
    /*padding: 10px; */
    margin:10px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    background-color: #eee;
    div {
      padding: 5px 10px 5px 10px;
      b {
        color: red;
        font-size: 14px;
        padding-right: 20px;
      }
      span {
        color: #999;
        text-decoration: line-through;
      }
    }
    p {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      font-size: 12px;
    }
  }
}
.prd_list:nth-child(odd) {
  margin-right: 3%;
}
.bottom_btn{
    margin:10px 0;
}
</style>