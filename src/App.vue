<template>
<div id="app">
  <!-- <header class="btw p10 align" style="background-color:#1754C2;padding:5px 20px">
    <div class="row align">
      <div>
        <img style="width:40px;height:40px" src="../src/assets/images/logo.jpg" alt />
      </div>
      <div style="font-size:20px;color:#fff" class="ml10">广东体育职业技术学院</div>
    </div>
    <div style="color:#fff" class="curpoint">校内网登录</div>
  </header> -->

  <body>
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </body>

  <!-- <footer class="footer">
    <div class="footer-content arc">
      <div class="footer-info">
        <p>学校地址：广东省广州市天河区黄村奥体路52号</p>
        <p>学校电话：020-87128173</p>
      </div>
      <div style="">
        <img style="width:80%; margin:auto 0;" src="../src/assets/images/school-title.jpg"/>
      </div>
    </div>
    <p
      style="text-align:center;margin:20px auto"
    >Copyright© 2019 Guangdong Voctional Institute of Sport 备案号:粤ICP备06108273号</p>
  </footer> -->
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
  data() {
    return {
      editableTabsValue: "2"
    };
  },
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

.footer-content{
   background: rgb(70, 70, 70);
  padding: 0px 150px;
  align-content: center;
  align-items: center;
   height:150px;
}
.footer-info {
  font-size: 15px;
  color: #d6d6d6;
    background: rgb(70, 70, 70);
  text-align:left;
}
</style>
