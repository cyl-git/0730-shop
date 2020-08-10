<template>

     <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swiper"  :key="item[imgname]">
                    <img :src="item[imgname]" :class=   "[ isfull ? 'img-full':'img-normal']"  />    
        </mt-swipe-item>
      </mt-swipe>
   
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    props:['swiper','imgname','isfull']
    // 将来谁使用轮播图组件，谁就给我传递一个swiper数组，
     // 数组的中的图片路径，你给我一个，我用imgname变量来接收
     // isfull是true 图片撑满屏幕100%；如果不设置就是undifined是false的话，就自定义图片宽度，谁用我谁设定
}
</script>
<style lang="scss" scoped>
.mint-swipe-item {
  text-align: center;
  .img-full {
    width: 100%;
    height: 100%;
  }
  .img-normal{
    width:auto;
    height:100%;
  }
}
</style>