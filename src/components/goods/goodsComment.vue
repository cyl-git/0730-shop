<template>
  <div>
    <comt :comid="id"></comt>
  </div>
</template>
<script>
import comt from "../sub_components/comment.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    comt,
  },
  props: ["id"],
};
</script>