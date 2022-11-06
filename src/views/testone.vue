<template>
  <div>Page1-123</div>

  <div class="cursor-pointer" @click="$router.push('/testone')">test1</div>
  <div class="cursor-pointer" @click="$router.push('/testtwo')">test2</div>
  <div class="cursor-pointer" @click="$router.push('/testthree')">test3</div>
  <div class="cursor-pointer" @click="$router.push('/testFour')">test4</div>
  <div class="cursor-pointer" @click="$router.push('/testFive')">test5</div>

  <button @click="setSpecificEvent">setSpecificEvent</button>
  - - -
  <div>-----</div>
  <el-button type="primary" @click="completeOrder">Primary</el-button>
</template>

<script setup>
import { event } from "vue-gtag";

const login = () => {
  // event('login', { method: 'Google' })
  event("aaa", {
    event_category: "bbb",
    event_label: "ccc",
  });
};

const setSpecificEvent = () => {
  console.log("setSpecificEvent");
  event("aaa", {
    event_category: "bbb",
    event_label: "ccc",
  });
};

const completeOrder = () => {
  console.log("scompleteOrder ");
  event("完成訂單", {
    event_category: "編輯者",
    event_label: "作家",
  });
};
</script>

<style lang="scss" scoped></style>
