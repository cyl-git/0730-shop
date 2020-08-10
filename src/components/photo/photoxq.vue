<template>
  <div>
    <div class="newXqCon">
      <div class="mainTit">
        <h3>{{photoInfo.title}}</h3>
        <p>
          <span>时间：{{photoInfo.add_time | dateFormat('YYYY-MM-DD') }}</span>
          <span>点击次数：{{photoInfo.click}}次</span>
        </p>
      </div>

      <!-- <img class='preview-img' v-for='(item ,index) in list' :src='item.src' height='100' @click='$preview.open(index,list)' :key='item.index' > -->
      <vue-preview :slides='thumbsList' class="preview"></vue-preview>
      <div class='clear'></div>
      <div class="content" v-html="photoInfo.content"></div>

      <comment :comid="this.id"></comment>
    </div>
  </div>
</template>
<script>
import comment from "../sub_components/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      thumbsList:[]
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs()
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageinfo/" + this.id).then((res) => {
        if (res.body.status === 0) {
          this.photoInfo = res.body.message[0];
        } else {
          alert("加载图片详情，数据错误");
        }
      });
    },
    getThumbs(){
        this.$http.get('api/getthumimages/'+this.id).then(res=>{
        if (res.body.status === 0) {
          res.body.message.forEach(item=>{
              item.w=600
              item.h=400
              item.msrc=item.src
          })
          this.thumbsList = res.body.message;
        } else {
          alert("加载图片详情中的轮播图图片，数据错误");
        }
        })
    }
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