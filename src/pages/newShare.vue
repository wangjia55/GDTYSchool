<template>
  <div class="taps wrap" style>
    <el-tabs
      tab-position="top"
      v-model="editableTabsValue"
      :stretch="true"
      @tab-click="handleClick"
      style=""
    >
      <el-tab-pane label="首页" name="0">
        <Index></Index>
      </el-tab-pane>
      <el-tab-pane label="体育资讯" name="1">
        <Message></Message>
      </el-tab-pane>
      <el-tab-pane label="赛事服务" name="2">
        <Service></Service>
      </el-tab-pane>
      <el-tab-pane label="职业培训" name="3">
        <Job></Job>
      </el-tab-pane>
      <el-tab-pane label="职业鉴定" name="4">
        <Identification></Identification>
      </el-tab-pane>
      <el-tab-pane label="行业协会" name="5">
        <Guild></Guild>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import Index from "../components/tabsPage/index";
import Guild from "../components/tabsPage/guild";
import Identification from "../components/tabsPage/identification";
import Job from "../components/tabsPage/job";
import Message from "../components/tabsPage/message";
import Service from "../components/tabsPage/service";
export default {
  data() {
    return {
      editableTabsValue: "0"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
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
/*body {*/
  /*font-size: 12px;*/
  /*line-height: 25px;*/
  /*color: #333333;*/
  /*background: url(../assets/images/body_bg.jpg) repeat-x top;*/
/*}*/
</style>
