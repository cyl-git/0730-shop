<template>
  <div class="newXqCon">
    <div class="mainTit">
      <h3>{{newsinfo.title}}</h3>
      <p>
        <span>时间：{{newsinfo.add_time | dateFormat('YYYY-MM-DD') }}</span>
        <span>点击次数：{{newsinfo.click}}次</span>
      </p>
    </div>

    <div class="content" v-html="newsinfo.content"></div>

    <comment :comid="this.id"></comment>
  </div>
</template>
<script>
import comment from "../sub_components/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {},
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then((res) => {
        if (res.body.status === 0) {
          this.newsinfo = res.body.message[0];
        } else {
          alert("加载新闻详情，数据错误");
        }
      });
    },
  },
  components: {
    comment,
  },
};
</script>
<style lang='scss' scoped>
.newXqCon {
  .mainTit {
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    h3 {
      font-size: 20px;
      line-height: 1.4em;
    }
    p {
      color: skyblue;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>