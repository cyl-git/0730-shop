<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" ref="carNum" @change="countChange" />
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/dist/js/mui.js";
export default {
  data() {
    return {
      val: 1,
    };
  },
  created() {
    /*   this.num = mui(".mui-numbox").numbox().getValue();
    console.log(this.num); */
  },
  mounted() {
    //当组件挂载到页面中之后，去初始化数字框

    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange() {
      this.val = this.$refs.carNum.value;
      /* console.log(this.val); */
      this.$emit("func", this.val);
    },
  },
  props: ["max"],
  watch: {
    //watch 监听单个的虚拟的数据
    max: function (newVal, oldVal) {
      mui(".mui-numbox").numbox().setOption("max", newVal);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>