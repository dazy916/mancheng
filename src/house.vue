<script setup>
import aHouse from './assets/image/a.jpg'
import bHouse from './assets/image/b1.jpg'
import cHouse from './assets/image/b2.jpg'
import dHouse from './assets/image/b3.jpg'
import { ref, reactive } from 'vue'
const active = ref(0);
const icon = {
    aHouse,
    bHouse,
    cHouse,
    dHouse
};
let houseData = [
    { title: '户型A', icon: icon.aHouse, src: 'https://720yun.com/t/55vkzq2ys8m' },
    { title: '户型B', icon: icon.bHouse, src: 'https://720yun.com/t/cavkzq2ys8h' },
    { title: '户型C', icon: icon.cHouse, src: 'https://720yun.com/t/3dvkzq2w5rq' },
    { title: '户型D', icon: icon.dHouse }
]
const status = reactive({ visiable: false, isIndex: 0 })

function onClick(name, title) {
    console.log(name, title)
    status.isIndex = name
}
</script>
<template>
    <van-tabs
        @click="onClick"
        v-model:active="active"
        background="#013e3d"
        color="#eac699"
        title-active-color="#eac699"
        title-inactive-color="#fff"
    >
        <van-tab :title="item.title" v-for="(item,index) in houseData" :key="index">
            <van-image fit="cover" width="100vw" height="91vh" :src="item.icon" />
       
            <div class="bgpic" @click="status.visiable = true" v-if="status.isIndex != 3">
                <div class="container animation-3">
                    <div class="shape shape1"></div>
                    <div class="shape shape2"></div>
                    <div class="shape shape3"></div>
                    <div class="shape shape4"></div>
                </div>

                <div class="vr" @click="toIndex">
                    <!-- <van-icon  name="play-circle" color="#eac699" size="20" style="margin-top: .5rem;"/> -->
                    VR<br/>样板间
                </div>
            </div>
        </van-tab>
    </van-tabs>
    <van-icon
        v-if="status.visiable"
        name="cross"
        class="back"
        size="30"
        color="#ffffff"
        @click="status.visiable = false"
    />
    <iframe
        v-if="status.visiable"
        :src="houseData[status.isIndex].src"
        frameborder="no"
        class="show"
    ></iframe>
</template>
<style lang="less" scoped>
.huxing {
    position: absolute;
    top: 2rem;
    left: 50%;
    z-index: 3;
    margin-left: -25px;
}
.show {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 4;
}
.back {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;
}
.bgpic {
  position: absolute;
  width: 100%;
  // height: 35%;
  top: 10rem;
  z-index: 3;
}
.vr {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 8;
  // margin-left: -1.7rem;
  width: 3.4rem;
  height: 3.4rem;
  padding-top: .5rem;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #eac699;
  font-size: 0.6rem /* 14/16 */;
  display: flex;
  flex-direction: column;
}
@keyframes animation3shape1 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(5px, 5px);
  }
}
@keyframes animation3shape2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-5px, 5px);
  }
}
@keyframes animation3shape3 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(5px, -5px);
  }
}
@keyframes animation3shape4 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-5px, -5px);
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.container {
  // margin-left: -2rem;
  width: 4rem;
  height: 4rem;
  position: absolute;  
  bottom: 1.7rem;
  left: 1.7rem;
  z-index: 7;
  animation: rotation 1s infinite;
  .shape {
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    border: 0.1rem solid #eac699;
    border-radius: 50%;
  }
  .shape1 {
    left: 0;
    // border-color: #5c6bc0;
    border-top-left-radius: 10px;
    animation: animation3shape1 0.5s ease 0s infinite alternate;
  }
  .shape.shape2 {
    right: 0;
    // border-color: #8bc34a;
    border-top-right-radius: 10px;
    animation: animation3shape2 0.5s ease 0s infinite alternate;
  }
  .shape.shape3 {
    bottom: 0;
    // border-color: #ffb74d;
    border-bottom-left-radius: 10px;
    animation: animation3shape3 0.5s ease 0s infinite alternate;
  }
  .shape4 {
    bottom: 0;
    right: 0;
    // border-color: #f44336;
    border-bottom-right-radius: 10px;
    animation: animation3shape4 0.5s ease 0s infinite alternate;
  }
}
</style>