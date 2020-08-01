<template>
  <div>
      
      
      <h3>新闻详情--{{this.id}}</h3>
      <p><span>时间：2020-03-24</span><span>点击次数：100次</span></p>
      <div v-html=''></div>
      
      <comment :comid='this.id'></comment>



  </div>
</template>
<script>
import comment from '../comment/comment.vue'
export default {
  data() {
    return {
       id: this.$route.params.id,
       newsinfo:{} 
    };
  },
  created(){
  
/* this.getNewsInfo()  */
  },
  methods: {
    /* getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then((res) => {
        if (res.body.status === 0) {
          this.newsinfo = res.body.message[0];
        } else {
          alert("加载新闻详情，数据错误");
        }
      });
    } */
  },
  components:{
      comment
  }
};
</script>