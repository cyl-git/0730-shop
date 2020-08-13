<template>
  <div class="contain">
    <!--  购物车 -->

    <div class="mui-card" v-for="item in  carlist" :key="item.id">
      <mt-switch
        v-model="$store.getters.selectedObj[item.id]"
        style="height:20px;"
        @change="changeSelect(item.id,$store.getters.selectedObj[item.id])"
      ></mt-switch>
      <img :src="item.thumb_path" width="40" height="40" />
      <div class="info">
        <h3>{{item.id}}-{{item.title}}--{{$store.getters.countObj[item.id]}}</h3>
        <div class="cartInfo">
          <div class="pr">￥{{item.sell_price}}</div>

          <div>
            <nobox style="height:20px;" :initCount="$store.getters.countObj[item.id]" :id="item.id"></nobox>
          </div>
          <div>
            <a @click="delCar(item.id)">删除</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <table width="100%" class="totP">
        <tr>
          <td>
            <p>总计(不含运费)</p>
            <div>
              已勾选商品：
              <b>{{$store.getters.totalCount}}</b>件
              ，总价
              <b>￥{{$store.getters.totalPrice}}</b>
            </div>
          </td>
          <td width="40" align="right">
            <mt-button type="danger" size="small">去结算</mt-button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Switch } from "mint-ui";
import nobox from "../sub_components/shopcar_nobox.vue";
Vue.component(Switch.name, Switch);
export default {
  data() {
    return {
      value: "",
      carlist: [],
    };
  },
  created() {
    this.getGoodsCarList();
  },
  methods: {
    getGoodsCarList() {
      if (this.$store.getters.idstring.length === 0) return;
      this.$http
        .get("api/goods/getshopcarlist/" + this.$store.getters.idstring)
        .then((res) => {
          if (res.body.status === 0) {
            // 如果成功了  就把请求回来的数据保存在data中，用于v-for  渲染页面
            this.carlist = res.body.message;
            /*  console.log(this.carlist); */
          } else {
            alert("加载购物车列表，数据错误");
          }
        });
    },
    delCar(id) {
      console.log("删除" + id);
      this.carlist.some((item, i) => {
        if (item.id === id) {
          this.carlist.splice(i, 1);
          return true;
        }
      });
      this.$store.commit("delCart", id);
    },
    changeSelect(id, select) {
      console.log(id + "," + select);
      this.$store.commit("changeSelectState", {
        id: id,
        selected: select,
      });
    },
  },
  components: {
    nobox,
  },
};
</script>
<style lang='scss'  scoped>
.contain {
  min-height: calc(100vh - 90px);
  background-color: #f7f7f7;
  padding-top: 10px;
  border: 1px solid #f7f7f7;
  .mui-card {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info {
    flex: 0 1 auto;
    h3 {
      font-size: 14px;
      font-weight: bolder;
    }
    .cartInfo {
      display: flex;

      justify-content: space-between;
      align-items: center;
      .pr {
        color: red;
      }
    }
  }
  .totP {
    b {
      color: red;
    }
  }
}
</style>