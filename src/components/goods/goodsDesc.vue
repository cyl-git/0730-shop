<template>
  <div class="contain">
    <h3>{{id}}--{{goodsdesc.title}}</h3>
    <hr />
    <div v-html="goodsdesc.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsdesc: {},
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      this.$http.get("api/goods/getdesc/" + this.id).then((res) => {
        if (res.body.status === 0) {
          this.goodsdesc = res.body.message[0];
          console.log(this.goodsdesc);
        } else {
          alert("加载购买详情图文介绍，数据错误");
        }
      });
    },
  },
  props: ["id"],
};
</script>
<style lang="scss" scoped>
.contain {
  /deep/ img {
    width: 100%;
    border: 1px solid #f00;
    height: auto;
    display: block;
    &::after {
      content: "";
      display: block;
      height: 10px;
    }
  }
}
</style>