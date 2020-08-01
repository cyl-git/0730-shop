<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item  in imglist " :key="item.url">
        <router-link  :to=" '/home/newslist/newsxq/'+item.id " ><!--  :to=" '/home/newslist/'+ item.id"    -->
          <img class="mui-media-object mui-pull-left" :src="item.imgPath" />
          <div class="mui-media-body">
            {{item.mainT}}
            <p class="mui-ellipsis">{{item.sunT}}</p>
            <div class="time">
              <span>时间： {{item.time}}</span>
              <span>点击：{{item.num}} 次</span>
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
      imglist: [
        {
          id: 0,
          url: "1",
          imgPath:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596110304041&di=dcffe239a50e42e876bc8a09053061cf&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0704%2Fe53c868ee9e8e7b28c424b56afe2066d.jpg",
          mainT: "幸福",
          sunT: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
          time: "2020-07-31 22:10:00",
          num: 1,
        },
        {
          id: 1,
          url: "2",
          imgPath: "",
          mainT: "木屋",
          sunT: "要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖",
          time: "2020-07-31 22:10:00",
          num: 22,
        },
      ],
      // imglist:[]
    };
  },
  /*   created(){
      this. getimgList() //当组件一创建成功  就调用这个方法 来取数据 然后用这些数据来渲染页面
  }, */
  methods: {
    /*    getimgList(){
        //发ajax 请求数据 
        //这里的请求地址 在main.js中全局配置一下  这样 以后服务器地址变动的话，不用每个ajax地址都改动   请转到main.js查看
        this.$http.get('data/getnewslist').then( res =>{
            if(res.body.status===0){ // 如果成功了  就把请求回来的数据保存在data中，用于v-for  渲染页面
                this.imglist=res.body.message
            }else{
                alert('加载新闻列表，数据错误')
            }
        })  
     } */
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
</style>