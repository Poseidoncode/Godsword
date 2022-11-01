<template>
  <main class="main-content">
    <div class="flex justify-center">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Card title２</h5>
          <p class="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
          <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  </main>

  <!-- <div><img :src="imageUrl" alt="img" /></div> -->
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onUpdated } from "vue";
import imageUrl from "@/assets/images/1.png";

const setCanvas = () => {
  //https://juejin.cn/post/6986785259966857247
  // js
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // 填充的顏色
  ctx.fillStyle = "darkgray";
  // 填充矩形 fillRect(起始X,起始Y,终点X,终点Y)
  ctx.fillRect(0, 0, 400, 100);
  ctx.fillStyle = "#fff";
  // 繪製填充文字
  ctx.fillText("刮刮卡", 180, 50);

  let isDraw = false;
  canvas.onmousedown = function () {
    isDraw = true;
  };
  canvas.onmousemove = function (e) {
    if (!isDraw) return;
    // 計算滑鼠在canvas里的位置
    const x = e.pageX - canvas.offsetLeft;
    const y = e.pageY - canvas.offsetTop;
    // 設置 globalCompositeOperation
    ctx.globalCompositeOperation = "destination-out";
    // 畫圓
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    // 填充圆形
    ctx.fill();
  };
  canvas.onmouseup = function () {
    isDraw = false;
  };
};
</script>

<style scoped>
.main-content {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #dcf0fa;
}
</style>
