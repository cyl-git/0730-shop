<template>
  <div>
    <div>评论---{{this.comid}}</div>
    <div>
      <textarea placeholder="请输入内容" class="textarea" maxlength="120"></textarea>
    </div>
    <div>
      <mt-button type="primary" size="large">提交</mt-button>
    </div>
    <div class="com-list" v-for="(item,i) in comments" :key="i" v-if="item.user_name">
      <div
        class="tit"
      >第{{i+1}}楼 &nbsp; &nbsp; {{ item.user_name}} &nbsp; &nbsp; {{item.add_time | dataFormat(' YYYY-MM-DD')}}</div>
      <div class="cont">{{item.content}}</div>
    </div>

    <div>
      <mt-button type="primary" size="large" plain @click="getComments">加载更多</mt-button>
    </div>
  </div>
</template>
<script>
/* var comt_json=require ('./../../data/comments.json') */
import comt_json from "../../data/comments.js";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      pageindex: 1,
      comments: [],
      num: 0, //所有的评论数据
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.num += 5;
      
      this.comments = comt_json.message.slice(0, this.num);
      if (this.num > comt_json.message.length && comt_json.message.length < this.num -5) {
       Toast('已经是全部数据了，没有更多了')
      }
    },
  },
  props: ["comid"],
};
</script>
<style  lang='scss' scoped>
div div {
  overflow: hidden;
  margin: 10px 0;
  textarea {
    margin-bottom: 0;
    display: block;
  }
}
.com-list {
  border-bottom: 1px solid #eee;
}
</style>