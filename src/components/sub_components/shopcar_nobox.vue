<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input
      class="mui-numbox-input"
      type="number"
      ref="carNum"
      :value="initCount"
      @change="countChange"
    />
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
  created() {},
  mounted() {
    //当组件挂载到页面中之后，去初始化数字框

    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange() {
      this.val = parseInt(this.$refs.carNum.value);
      this.$store.commit("updateGoodsCount", {
        id: this.id,
        count: this.val,
      });
    },
  },
  props: ["initCount", "id"],
};
</script>
<style lang="scss" scoped>
</style>