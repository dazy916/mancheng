<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './index.vue'
import { ref, reactive } from 'vue'
import home from './assets/image/keshihuaquanjing.png'
import homeAct from './assets/image/keshihuaquanjing-active.png'
import room from './assets/image/tijixiao.png'
import roomAct from './assets/image/tijixiao-active.png'
import garden from './assets/image/dixing.png'
import gardenAct from './assets/image/dixing-active.png'
import exemption from './assets/image/shiyingxing.png'
import exemptionAct from './assets/image/shiyingxing-active.png'
import nav from './assets/image/logo-nav.png'
const active = ref(0);
const icon = {
  homeAct,
  home,
  room,
  roomAct,
  garden,
  gardenAct,
  exemption,
  exemptionAct,
  nav
};
// const active = ref(0);
const status = reactive({ menuShow: false })
function open(){
  status.menuShow = true
  setTimeout(()=>{
    status.menuShow = false
  },3000)
}
</script>

<template>
  <router-view></router-view>
  <van-image
    class="indexicon"
    width="3.5em"
    height="3em"
    @click="open"
    :src="icon.nav"
  ></van-image>
  <van-popup v-model:show="status.menuShow" position="bottom" :overlay="false">
    <van-tabbar v-model="active" route class="nav">
      <van-tabbar-item replace to="/index">
        <span>全景鸟瞰</span>
        <template #icon="props">
          <img :src="props.active ? icon.homeAct : icon.home" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/house">
        <span>户型鉴赏</span>
        <template #icon="props">
          <img :src="props.active ? icon.roomAct : icon.room" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/view">
        <span>园林漫游</span>
        <template #icon="props">
          <img :src="props.active ? icon.gardenAct : icon.garden" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/exemption">
        <span>免责条款</span>
        <template #icon="props">
          <img :src="props.active ? icon.exemptionAct : icon.exemption" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </van-popup>
  <!--<div class="house"></div>
  <div class="line"></div>
  -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* padding-bottom: 2rem; */
}
body {
  /* height: 100vh; */
  padding: 0;
  /* overflow: hidden; */
  background-image: linear-gradient(to bottom right, #260900, #231915);
}
.indexicon {
  position: absolute;
  left: 50%;
  margin-left: -1.75em;
  bottom: 2.5em;
  z-index: 999;
}
.main {
  display: flex;
  width: 100vw;
  height: 100vh;
  padding-bottom: 0rem;
  box-sizing: border-box;
}
.nav {
  border-radius: 2em;
  background-image: linear-gradient(#3e2201, #260900);
}
.van-tabbar-item {
  color: #eac699 !important;
}
.van-tabbar-item--active {
  background-color: #eac699 !important;
  color: #002623 !important;
}
.van-tabbar-item__icon img {
  height: 26px !important;
}
.line {
  position: fixed;
  bottom: var(--van-tabbar-height);
  width: 100vw;
  height: 2px;
  background-color: #eac699;
}
.house {
  position: fixed;
  right: 12%;
  bottom: var(--van-tabbar-height);
  width: 70px;
  height: 25px;
  background-image: url("./assets/image/house.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.font18 {
  font-size: 18px;
}
.font14 {
  font-size: 14px;
}
</style>
