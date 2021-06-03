<template>
  <div class="normal-main-contain">
    <div v-for="(item, index) in messageArray" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageArray: [],
    };
  },
  created() {
    this.createMessage();
  },
  methods: {
    createMessage() {
      for (let index = 0; index < 60; index++) {
        this.messageArray.push("----待处理----" + index);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.normal-main-contain {
  display: flex;
  flex-direction: column;
}
</style>
