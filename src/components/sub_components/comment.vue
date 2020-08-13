<template>
  <div>
    <div>评论---{{this.comid}}</div>
    <div>
      <textarea placeholder="请输入内容" class="textarea" maxlength="120" v-model="msg"></textarea>
    </div>
    <div>
      <mt-button type="primary" size="large" @click="postComment">提交</mt-button>
    </div>
    <div class="com-list" v-for="(item,i) in comments" :key="i" v-if="item.user_name">
      <div
        class="tit"
      >第{{i+1}}楼 &nbsp; &nbsp; {{ item.user_name}} &nbsp; &nbsp; {{item.add_time | dateFormat(' YYYY-MM-DD')}}</div>
      <div class="cont">{{item.content==='undefined'?'此用户没有评论···':item.content}}</div>
    </div>

    <div>
      <mt-button type="primary" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
  </div>
</template>
<script>
/* var comt_json=require ('./../../data/comments.json') */
import comt_json from "../../data/comments.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1,
      comments: [],
      msg: "",
    };
  },
  props: ["comid"],
  created() {
    this.getComments(1);
  },
  methods: {
    getComments(id) {
      this.$http
        .get("api/getcomments/" + this.comid + "?pageindex=" + this.pageindex)
        .then((res) => {
          if (res.body.status === 0) {
            this.comments = this.comments.concat(res.body.message);
            if (res.body.message.length == 0 && id !== 1) {
              Toast("已经是全部评论了...");
            }
            console.log(this.comments);
          } else {
            alert("加载图片分类，数据错误");
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getComments();
    },

    postComment() {
      if (this.msg.trim().length === 0) {
        Toast("输入内容不能为空");
        return;
      } else {
        var newMsg = {
          user_name: "匿名用户",
          add_time: Date.now(),
          content: this.msg.trim(),
        };
      }
      this.$http
        .post("api/postcomment/" + this.comid, {
          content: this.msg.trim(),
        })
        .then(function (res) {
          if (res.body.status === 0) {
            this.comments.unshift(newMsg);
            this.msg = "";
            Toast(res.body.message);
          }
        });
    },
  },
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