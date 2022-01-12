<script setup>
import aHouse from './assets/image/a.jpg'
import bHouse from './assets/image/b1.jpg'
import cHouse from './assets/image/b2.jpg'
import dHouse from './assets/image/b3.jpg'
import eHouse from './assets/image/c1.jpg'
import fHouse from './assets/image/l1.jpg'
import fHouse1 from './assets/image/l2.jpg'
import fHouse2 from './assets/image/l3.jpg'
import fHouse3 from './assets/image/l4.jpg'
import fHouse4 from './assets/image/l5.jpg'
import { ref, reactive } from 'vue'
const active = ref(0);
const icon = {
  aHouse,
  bHouse,
  cHouse,
  dHouse,
  eHouse,
  fHouse,
  fHouse1,
  fHouse2,
  fHouse3,
  fHouse4
};
let houseData = [
  { title: 'A1户型', icon: icon.aHouse, src: 'https://720yun.com/t/55vkzq2ys8m' },
  { title: 'B1户型', icon: icon.bHouse, src: 'https://720yun.com/t/cavkzq2ys8h' },
  { title: 'B2户型', icon: icon.cHouse, src: 'https://720yun.com/t/3dvkzq2w5rq' },
  { title: 'B3户型', icon: icon.dHouse, src: 'https://720yun.com/t/3dvkzq2w5rq' },
  { title: 'C1户型', icon: icon.eHouse, src: 'https://720yun.com/t/3dvkzq2w5rq' },
  { title: '联排', icon: icon.fHouse4, src: 'https://720yun.com/t/3dvkzq2w5rq' }
]
let lianData = [  
  { title: '负一层', icon: icon.fHouse4, src: 'https://720yun.com/t/3dvkzq2w5rq'},
  { title: '一层', icon: icon.fHouse, src: 'https://720yun.com/t/3dvkzq2w5rq' },
  { title: '二层',  icon: icon.fHouse1, src: 'https://720yun.com/t/3dvkzq2w5rq' },
  { title: '三层',icon: icon.fHouse2, src: 'https://720yun.com/t/3dvkzq2w5rq' },
  { title: '四层',icon: icon.fHouse3, src: 'https://720yun.com/t/3dvkzq2w5rq' }
]
const status = reactive({
  visiable: false,
  isIndex: 0,
  activeKey:0,
  isSRC:''
})
status.isSRC=houseData[0].icon
function onClick( index,item) {
  status.isIndex = index
  status.isSRC=houseData[index].icon
}
function watchKey(index){  
  status.isIndex = index+6
  status.isSRC=lianData[index].icon
  console.log(status.isIndex)
}
</script>
<template>
  <van-tabs
    @click="onClick"
    v-model="active"
    background="#013e3d"
    color="#eac699"
    title-active-color="#eac699"
    title-inactive-color="#fff"
  >
    <van-tab :title="item.title" v-for="(item,index) in houseData" :key="index">
      <van-image fit="cover" width="100vw" height="95.2vh" :src="status.isSRC" />
    </van-tab>
  </van-tabs>
  <!-- 联排楼层切换 -->
  <van-sidebar v-model="status.activeKey" class="lianpai"  @change="watchKey" v-if="status.isIndex>=5">
    <van-sidebar-item :title="item.title" v-for="(item,index) in lianData" :key="index"/>
  </van-sidebar>
  <!-- 户型展示图 -->
  <!-- <div v-for="(item,index) in houseData" :key="index">
    <div v-if="status.isIndex === index">
      <van-image fit="cover" width="100vw" height="100vh" :src="status.isPic" />
    </div>
  </div>-->
  <!-- 户型切换按钮 -->
  <!-- <van-row class="housenav">
    <van-col
      class="snav"
      :span="4"
      v-for="(stem,sndex) in houseData"
      :key="sndex"
      @click="onClick(stem, sndex)"
    >{{ stem.title }}</van-col>
  </van-row>-->
  <!-- vr按钮 -->
  <div class="bgpic" @click="status.visiable = true">
    <div class="container animation-3">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
      <div class="shape shape4"></div>
    </div>

    <div class="vr" @click="toIndex">
      VR
      <br />样板间
    </div>
  </div>
  <!-- vr关闭按钮 -->
  <van-icon
    v-if="status.visiable"
    name="cross"
    class="back"
    size="30"
    color="#ffffff"
    @click="status.visiable = false"
  />
  <iframe v-if="status.visiable" :src="houseData[status.isIndex].src" frameborder="no" class="show"></iframe>
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
.lianpai{  
  position: absolute;
  width: 4em;
  right: 0;
  top: 48%;
  z-index: 10;
  .van-sidebar-item{
    padding: .5em;
  }
}
.housenav {
  position: absolute;
  width: 100vw;
  top: 0;
  height: 5vh;
  background-image: linear-gradient(to bottom right, #260900, #231915);
  .snav {
    line-height: 3em;
    color: #fff;
    border-right: 1px #683901 solid;
  }
}
.bgpic {
  position: absolute;
  width: 6.4rem;
  height: 6.4rem;
  right: 2em;
  bottom: 50%;
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
  padding-top: 0.5rem;
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