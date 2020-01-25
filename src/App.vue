<template>
  <div id="app">
    <header class="btw p10 align" style="background-color:#2964B3;padding:10px 30px">
      <div class="row align">
        <div>
          <img style="width:40px;height:40px" src="../src/assets/images/logo.jpg" alt />
        </div>
        <div style="font-size:20px;color:#fff" class="ml10">广东体育职业技术学院</div>
      </div>
      <div style="color:#fff" class="curpoint">登录</div>
    </header>
    <div class="tabs wrap">
      <el-tabs tab-position="top" :stretch="true" style="height: 200px;">
        <el-tab-pane label="首页">
          <Index></Index>
        </el-tab-pane>
        <el-tab-pane label="体育资讯">
          <Message></Message>
        </el-tab-pane>
        <el-tab-pane label="赛事服务">
          <Service></Service>
        </el-tab-pane>
        <el-tab-pane label="职业培训">
          <Job></Job>
        </el-tab-pane>
        <el-tab-pane label="职业鉴定">
          <Identification></Identification>
        </el-tab-pane>
        <el-tab-pane label="行业协会">
          <Guild></Guild>
        </el-tab-pane>
      </el-tabs>
    </div>
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
    <footer>
      <p style="text-align:center;margin:20px auto">CopyRight 2020-2021 备案号:Ac515158484181</p>
    </footer>

  </div>
</template>

<script>
import Index from "./components/tabsPage/index";
import Guild from "./components/tabsPage/guild";
import Identification from "./components/tabsPage/identification";
import Job from "./components/tabsPage/job";
import Message from "./components/tabsPage/message";
import Service from "./components/tabsPage/service";
export default {
  name: "App",
  components: {
    Index,
    Guild,
    Identification,
    Job,
    Message,
    Service
  }
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}

.bounce-leave-active {
  animation: bounce-out 0.3s;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.bounce-back-enter-active {
  animation: bounce-back-in 0.3s;
}

.bounce-back-leave-active {
  animation: bounce-back-out 0.3s;
}

@keyframes bounce-back-in {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes bounce-back-out {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0.5;
    transform: translateX(100%);
  }
}
body {
  font-size: 12px;
  line-height: 25px;
  color: #333333;
  background: url(./assets/images/body_bg.jpg) repeat-x top;
}
</style>
