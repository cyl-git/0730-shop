<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item  in imglist " :key="item.url">
        <router-link  :to=" '/home/newsxq/'+item.id " ><!--  :to=" '/home/newslist/'+ item.id"    -->
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
           {{item.id}}---{{item.title}}
            <p class="mui-ellipsis">{{item.sunT}}</p>
            <div class="time">
              <span>时间： {{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}} 次</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
       imglist:[]
    };
  },
    created(){
      this.getimgList() //当组件一创建成功  就调用这个方法 来取数据 然后用这些数据来渲染页面
  },
  methods: {
       getimgList(){
        //发ajax 请求数据 
        //这里的请求地址 在main.js中全局配置一下  这样 以后服务器地址变动的话，不用每个ajax地址都改动   请转到main.js查看
        this.$http.get('api/getnewslist').then( res =>{
            if(res.body.status===0){ // 如果成功了  就把请求回来的数据保存在data中，用于v-for  渲染页面
                this.imglist=res.body.message
               
            }else{
                alert('加载新闻列表，数据错误')
            }
        })  
     }
  },
};
</script>
<style scoped>
.mui-media-body div {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: skyblue;
}
.mui-ellipsis{
 white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
border:1px solid #f00;
padding:0 10px;
}
</style>